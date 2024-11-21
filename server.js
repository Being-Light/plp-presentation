const express = require('express');
const path = require('path');
const app = express();

// Store click counts for social media platforms (in-memory storage for simplicity)
let clickCounts = {
    instagram: 0,
    facebook: 0,
    youtube: 0
};

// Serve static files (HTML, CSS, images, etc.) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to track clicks
app.get('/track-click', (req, res) => {
    const platform = req.query.social;  // 'social' parameter will tell us which platform was clicked
    
    // Increase the click count for the specified platform
    if (clickCounts.hasOwnProperty(platform)) {
        clickCounts[platform]++;
    }

    res.send('Click tracked for ' + platform);
});

// Route to fetch the current click counts
app.get('/get-clicks', (req, res) => {
    res.json(clickCounts);  // Send the click counts in JSON format to the frontend
});

// Default route to handle any other requests (just in case for 404 handling)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', req.url));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
