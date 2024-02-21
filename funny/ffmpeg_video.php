<?php
// Display FFmpeg version
$outputFFmpegVersion = shell_exec('../ffmpeg-download/ffmpeg-6.1-amd64-static/ffmpeg -version 2>&1');
echo '<pre>' . $outputFFmpegVersion . '</pre>';

// Set the output file name (relative path)
$outputFile = 'output.mp4';

// Set the text to be displayed
$text = 'Hello, World!';

// Set the font file path (use a relative path to Arial.ttf)
$fontFile = 'Arial.ttf';

// Set the font size
$fontSize = 24;

// Set the video duration in seconds
$duration = 10;

// Set the output resolution
$width = 640;
$height = 480;

// Generate the command to create the video
$ffmpegCommand = "../ffmpeg-download/ffmpeg-6.1-amd64-static/ffmpeg -t $duration -f lavfi -i color=c=white:s=${width}x$height -vf \"drawtext=text='$text':fontfile=$fontFile:fontsize=$fontSize:x=(w-text_w)/2:y=(h-text_h)/2\" -y $outputFile";


// Display the FFmpeg command
echo '<pre>' . $ffmpegCommand . '</pre>';

// Execute the FFmpeg command and capture output
$outputCreateVideo = shell_exec($ffmpegCommand . ' 2>&1');
echo '<pre>' . $outputCreateVideo . '</pre>';

// Check if the file is created
if (file_exists($outputFile)) {
    echo '<p>Video file created successfully: <a href="' . $outputFile . '" target="_blank">View Video</a></p>';
} else {
    echo '<p>Error: Video file not created.</p>';
}

// Display the created video
echo '<video width="640" height="480" controls>';
echo '<source src="' . $outputFile . '" type="video/mp4">';
echo 'Your browser does not support the video tag.';
echo '</video>';
?>
