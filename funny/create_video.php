

<?php

// Set the output file name
$outputFile = 'output.mp4';

// Set the video duration in seconds
$duration = 10;

// Set the text to be displayed
$text = 'Hello, World!';

// Set the font file path
$fontFile = '/Arial.ttf';

// Set the font size
$fontSize = 24;

// Set the output resolution
$width = 640;
$height = 480;

// Generate the command to create the video
$command = "ffmpeg -t $duration -s ${width}x$height -f lavfi -i color=c=white:s=${width}x$height -vf \"drawtext=text='$text':fontfile=$fontFile:fontsize=$fontSize:x=(w-text_w)/2:y=(h-text_h)/2\" -y $outputFile";

// Execute the FFmpeg command
exec($command, $output, $returnCode);

// Check for errors
if ($returnCode !== 0) {
    echo "Error creating video: " . implode("\n", $output);
} else {
    echo "Video created successfully: $outputFile";
}
?>
