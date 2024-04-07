<?php
$cpuUsage = exec("top -bn 1 | awk '/^%Cpu/{print $2}'");

exec("free -m", $output);
list($totalMemory, $usedMemory, $freeMemory, $sharedMemory, $bufferMemory, $availableMemory) = explode(" ", preg_replace('/\s+/', ' ', $output[1]));

$memoryUsage = ($usedMemory / $totalMemory) * 100;

$memoryGB = $usedMemory / 1024;

echo "CPU Usage: $cpuUsage%\n";
echo "Memory Usage (GB): $memoryGB GB\n";
?>
