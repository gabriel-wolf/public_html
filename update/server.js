const express = require('express');
const { exec } = require('child_process');

const app = express();

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint to handle Git update request
app.post('/update-repo', (req, res) => {
    exec('git status', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Git command: ${error}`);
            res.status(500).send('Failed to update repository');
            return;
        }
        console.log(`Git command output: ${stdout}`);
        res.send('Repository updated successfully');
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
