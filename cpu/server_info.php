<?php
// Get CPU usage
exec("grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage}'", $cpuUsage);
$simpleCpuUsage = exec("top -bn 1 | awk '/^%Cpu/{print $2}'");

// Get total memory and free memory
exec("free -b", $output);
list($totalMemory, $usedMemory, $freeMemory, $sharedMemory, $bufferMemory, $availableMemory) = explode(" ", preg_replace('/\s+/', ' ', $output[1]));

// Calculate memory usage percentage
if ($totalMemory > 0) {
    $memoryUsage = ($usedMemory / $totalMemory) * 100;
} else {
    $memoryUsage = 0; // or any default value
}

// Convert memory to GB and format it
$memoryGB = number_format($usedMemory / (1024 * 1024 * 1024), 1);

// Send JSON response
$json = json_encode(['simpleCpuUsage' => $simpleCpuUsage, 'cpuUsage' => $cpuUsage[0], 'memoryUsage' => $memoryUsage, 'memoryGB' => $memoryGB], JSON_NUMERIC_CHECK);

if ($json === false) {
    echo 'Json encoding failed: ' . json_last_error_msg();
} else {
    header('Content-Type: application/json');
    echo $json;
}
?>
