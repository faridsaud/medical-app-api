import mongoose from 'mongoose';
// Require external modules

// Connect to DB
export default mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-godlt.mongodb.net/data?retryWrites=true`, { autoIndex: false });
