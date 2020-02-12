const express = require('express');
const app = express();
const morgan = require('morgan');

const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

//Init Middleware
app.use(morgan('dev'));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to contact keeper API' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})