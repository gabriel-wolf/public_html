<?php
exec("grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage}'", $cpuUsage);
$simpleCpuUsage = exec("top -bn 1 | awk '/^%Cpu/{print $2}'");

$numberOfUsers = exec("top -bn 1 | awk '/users/ {print $8}'");

$topOutput = shell_exec("top -bn 1");
preg_match('/MiB Mem :.*?(\d+\.\d+) total,.*?(\d+\.\d+) free/', $topOutput, $matches);

if (count($matches) >= 2) {
    $totalMemory = $matches[1];

} else {
    echo "error";
}

$usedMemory = exec("top -bn 1 | awk '/MiB Mem/ {print $8}'");
$freeMemory = exec("top -bn 1 | awk '/MiB Mem/ {print $10}'");

$memoryPercentage = ($usedMemory / $totalMemory) * 100;

$memoryGB = number_format($usedMemory / (1024), 1);

$json = json_encode(['memoryPercentage' => $memoryPercentage, 'usedMemory' => $usedMemory, 'freeMemory' => $freeMemory, 'numUsers' => $numberOfUsers, 'simpleCpuUsage' => $simpleCpuUsage, 'cpuUsage' => $cpuUsage[0], 'memoryUsage' => $memoryUsage, 'memoryGB' => $memoryGB], JSON_NUMERIC_CHECK);

if ($json === false) {
    echo 'Json encoding failed: ' . json_last_error_msg();
} else {
    header('Content-Type: application/json');
    echo $json;
}
?>
