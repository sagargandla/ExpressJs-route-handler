const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// POST /register route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required (name, email, password)" });
    }

    // Normally here you would save the user to a database, but for now, we'll just return a success message.
    return res.status(200).json({
        message: 'Registration successful',
        user: { name, email }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
