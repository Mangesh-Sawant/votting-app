const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({data: 'Hello World'});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});