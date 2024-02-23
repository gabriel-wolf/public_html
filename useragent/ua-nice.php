<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Agent Information</title>
    <style>
        body {
            background-color: #333;
            color: #fff;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            margin: 0;
        }

        h2 {
            color: #00bcd4;
        }

        p {
            font-size: 18px;
        }
    </style>
</head>
<body>

<?php
$userAgent = $_SERVER['HTTP_USER_AGENT'];

// Function to get the browser from the User-Agent string
function getBrowser($userAgent) {
    $browser = "Unknown";
    
    if (preg_match('/(Chrome|Safari|Firefox|Edge|MSIE|Opera)/i', $userAgent, $matches)) {
        $browser = $matches[1];
    }

    return $browser;
}

// Function to get the operating system from the User-Agent string
function getOperatingSystem($userAgent) {
    $os = "Unknown";

    if (preg_match('/(Windows|Macintosh|Linux)/i', $userAgent, $matches)) {
        $os = $matches[1];
    }

    return $os;
}

$browser = getBrowser($userAgent);
$operatingSystem = getOperatingSystem($userAgent);
?>

<div style="background-color: #444; padding: 20px; border-radius: 10px;">
    <h2>User Agent Information</h2>
    <p>User Agent: <?php echo htmlspecialchars($userAgent); ?></p>
    <p>Browser: <?php echo htmlspecialchars($browser); ?></p>
    <p>Operating System: <?php echo htmlspecialchars($operatingSystem); ?></p>
</div>

</body>
</html>
