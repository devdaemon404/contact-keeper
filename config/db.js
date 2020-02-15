const mongoose = require('mongoose');
const db = require('./keys').mongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;