<?php
$output = shell_exec('../ffmpeg-download/ffmpeg-6.1-amd64-static/ffmpeg -version 2>&1');
echo '<pre>' . $output . '</pre>';
?>
