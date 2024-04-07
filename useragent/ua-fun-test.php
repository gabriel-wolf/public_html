<?php
$ua = $_SERVER['HTTP_USER_AGENT'];

if (strpos($ua, 'Chrome') !== false) {
    $browser = 'Chrome';
} elseif (strpos($ua, 'Safari') !== false) {
    $browser = 'Safari';
} elseif (strpos($ua, 'Firefox') !== false) {
    $browser = 'Firefox';
} else {
    $browser = 'Unknown Browser';
}

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
    $flashText = 'NERD';

} elseif ($browser === 'Safari') {
    $message = "Safari... wtf";
    $flashText = 'WHY';

} elseif ($browser === 'Firefox') {
    $message = "You think you are so special because you use Firefox";
    $flashText = 'SMARTY';

} else {
    $message = "You are using $browser on $os.";
    $flashText = 'OK';

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rate Me</title>
    <style>
body {
            background-color: #333;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .center-text {
            font-size: 2em;
            margin-bottom: 20px;
        }
.flash-text {
            animation: flash 1s infinite alternate;
            font-size: 4em;
            color: red;
            text-align: center;
            text-shadow: 0 0 10px red;
        }

@keyframes flash {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div>
        <h1><?= $message ?></h1>
    </div>
<div class="flash-text">
        <h1><?= $flashText ?></h1>
    </div>
</body>
</html>
