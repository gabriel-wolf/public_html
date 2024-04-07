<?php
$ua = $_SERVER['HTTP_USER_AGENT'];

// Detect browser
if (strpos($ua, 'Chrome') !== false) {
    $browser = 'Chrome';
} elseif (strpos($ua, 'Safari') !== false) {
    $browser = 'Safari';
} elseif (strpos($ua, 'Firefox') !== false) {
    $browser = 'Firefox';
} else {
    $browser = 'Unknown Browser';
}

// Detect operating system
if (strpos($ua, 'Macintosh') !== false) {
    $os = 'Mac';
} elseif (strpos($ua, 'Windows') !== false) {
    $os = 'Windows';
} elseif (strpos($ua, 'Linux') !== false) {
    $os = 'Linux';
} else {
    $os = 'Unknown OS';
}

if ($os === 'Linux') {
    $message = "Linux. You think you are so quirky don't you. You are just a nerd.";
} elseif ($browser === 'Safari') {
    $message = "Safari... wtf";
} elseif ($browser === 'Firefox') {
    $message = "You think you are so special because you use Firefox";
} else {
    $message = "You are using $browser on $os.";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Info</title>
    <style>
        body {
            background-color: #333;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <div>
        <h1><?= $message ?></h1>
    </div>
</body>
</html>
