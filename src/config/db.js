import mongoose from 'mongoose';
// Require external modules

// Connect to DB
export default mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.k3y59.mongodb.net/heroku_19x74hd5?retryWrites=true&w=majority`, { autoIndex: false });
