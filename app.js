const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// Tracking click counts for social media
let clickLogs = {
    instagram: 0,
    facebook: 0,
    youtube: 0
};

// Serve click tracking data
app.get('/clicks', (req, res) => {
    res.json(clickLogs); // Return click data to the admin panel
});

// Track clicks for social media links
app.get('/track-click', (req, res) => {
    const socialMedia = req.query.social; // 'instagram', 'facebook', or 'youtube'
    
    if (clickLogs[socialMedia] !== undefined) {
        clickLogs[socialMedia] += 1; // Increment the appropriate counter
    }

    res.send('Click tracked');
});

// Set up server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
