const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
