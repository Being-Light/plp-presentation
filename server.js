const express = require('express');
const app = express();
const path = require('path');

// Store counts for each platform (reset to zero on server restart)
let clickCounts = {
    instagram: 0,
    facebook: 0,
    youtube: 0
};

// Serve static files (e.g., HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle tracking of clicks
app.get('/track-click', (req, res) => {
    const platform = req.query.social;
    
    if (platform && clickCounts[platform] !== undefined) {
        clickCounts[platform]++;
        console.log(`Click recorded for ${platform}. Current count: ${clickCounts[platform]}`);
    }

    res.status(200).send('Click recorded');
});

// Admin panel to view click counts
app.get('/admin', (req, res) => {
    res.send(`
        <h1>Admin Panel</h1>
        <p>Instagram clicks: ${clickCounts.instagram}</p>
        <p>Facebook clicks: ${clickCounts.facebook}</p>
        <p>YouTube clicks: ${clickCounts.youtube}</p>
        <a href="/admin/reset">Reset Counts</a>
    `);
});

// Admin reset endpoint to reset the click counts
app.get('/admin/reset', (req, res) => {
    clickCounts = { instagram: 0, facebook: 0, youtube: 0 };
    res.send('<h1>Click counts have been reset!</h1><a href="/admin">Go back to admin panel</a>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
