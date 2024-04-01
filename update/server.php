<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Define the repository path
$repoPath = '~/public_html/';

// Execute Git commands
// $output1 = shell_exec("cd $repoPath && git reset --hard origin/master 2>&1");
// $output2 = shell_exec("cd $repoPath && git pull origin master --force 2>&1");
echo shell_exec("cd .. && ls");
echo shell_exec("git -C ../ status");
echo shell_exec("./status.sh");


$output = shell_exec("git -C ../ status 2>&1");
if ($output === null) {
    echo "Error executing command.";
} else {
    echo "<pre>$output</pre>";
}

// echo shell_exec("ls");

$output1 = shell_exec("cd $repoPath && ls 2>&1");


// Output the results
echo "<pre>$output1</pre>";
// echo "<pre>$output2</pre>";
?>
