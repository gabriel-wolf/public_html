<?php
// Get CPU usage percentage
$cpuUsage = exec("top -bn 1 | awk '/^%Cpu/{print $2}'");

// Get total memory and free memory
exec("free -m", $output);
list($totalMemory, $usedMemory, $freeMemory, $sharedMemory, $bufferMemory, $availableMemory) = explode(" ", preg_replace('/\s+/', ' ', $output[1]));

// Calculate memory usage percentage
$memoryUsage = ($usedMemory / $totalMemory) * 100;

// Convert memory to GB
$memoryGB = $usedMemory / 1024;

// Print the information
echo "CPU Usage: $cpuUsage%\n";
echo "Memory Usage (GB): $memoryGB GB\n";
?>
