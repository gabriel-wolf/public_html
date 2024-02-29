<?php
// Set the maximum execution time to allow for prolonged CPU usage
set_time_limit(0);

if (isset($_POST['generate_load'])) {
    // Generate CPU load
    while (true) {
        // Perform a computationally intensive task
        $result = 0;
        for ($i = 0; $i < 1000000; $i++) {
            $result += sqrt($i);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generate CPU Load</title>
</head>
<body>

<form method="post">
    <input type="submit" name="generate_load" value="Generate CPU Load">
</form>

</body>
</html>
