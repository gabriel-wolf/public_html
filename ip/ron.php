<?php
// getip.php
$clientIP = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ronald</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background: url('imgs/ron_red.jpeg') no-repeat center center fixed;
            background-size: cover;
            height: 100vh;    
	        display: flex;
            align-items: center;
            justify-content: center;
            background-size: 100% 100%;
            text-align: center;
        }

        p {
            margin: 0;
            color: red;
            font-size: 100px;
            font-family: monospace;
            font-weight: bold;
            text-align: center;
            text-shadow: -2px -2px yellow, 2px -2px yellow, -2px 2px yellow, 2px 2px yellow;
            margin: 0;
        }
    </style>
</head>
<body>
    <p><?php echo $clientIP; ?></p>
<audio controls autoplay style="display: none;">
    <source src="doom.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>
</body>
</html>
