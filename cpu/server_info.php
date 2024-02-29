<?php
// Get CPU usage
exec("grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage}'", $cpuUsage);
$simpleCpuUsage = exec("top -bn 1 | awk '/^%Cpu/{print $2}'");

$numberOfUsers = exec("top -bn 1 | awk '/users/ {print $8}'");

// Execute top command and extract total memory information
$topOutput = shell_exec("top -bn 1");
preg_match('/MiB Mem :.*?(\d+\.\d+) total,.*?(\d+\.\d+) free/', $topOutput, $matches);

if (count($matches) >= 2) {
    $totalMemory = $matches[1];

    // Output the total memory
    // echo "Total Memory: $totalMemory MiB\n";
} else {
    // echo "Error parsing total memory information from top command.\n";
}

$usedMemory = exec("top -bn 1 | awk '/MiB Mem/ {print $8}'");
$freeMemory = exec("top -bn 1 | awk '/MiB Mem/ {print $10}'");

// Calculate memory percentage
$memoryPercentage = ($usedMemory / $totalMemory) * 100;

// Output the memory percentage
// echo "Memory Percentage: $memoryPercentage%\n";

// // Get total memory and free memory
// exec("free -b", $output);
// list($totalMemory, $usedMemory, $freeMemory, $sharedMemory, $bufferMemory, $availableMemory) = explode(" ", preg_replace('/\s+/', ' ', $output[1]));

// // Calculate memory usage percentage
// if ($totalMemory > 0) {
//     $memoryUsage = ($usedMemory / $totalMemory) * 100;
// } else {
//     $memoryUsage = 0; // or any default value
// }

// Convert memory to GB and format it
$memoryGB = number_format($usedMemory / (1024), 1);

// Send JSON response
$json = json_encode(['memoryPercentage' => $memoryPercentage, 'usedMemory' => $usedMemory, 'freeMemory' => $freeMemory, 'numUsers' => $numberOfUsers, 'simpleCpuUsage' => $simpleCpuUsage, 'cpuUsage' => $cpuUsage[0], 'memoryUsage' => $memoryUsage, 'memoryGB' => $memoryGB], JSON_NUMERIC_CHECK);

if ($json === false) {
    echo 'Json encoding failed: ' . json_last_error_msg();
} else {
    header('Content-Type: application/json');
    echo $json;
}
?>
