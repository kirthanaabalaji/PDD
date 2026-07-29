require('dotenv').config();
const mongoose = require('mongoose');
const dns = require('dns');

// Only attempt custom DNS servers on local Windows environments, never on Vercel
if (!process.env.VERCEL) {
  try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
  } catch (e) {
    // Ignore DNS set errors
  }
}

let cached = global._mongooseConn;

if (!cached) {
  cached = global._mongooseConn = { conn: null, promise: null };
}

const DEFAULT_MONGO_URI = 'mongodb+srv://kirth82_db_user:kirth82@cluster0.qlfon46.mongodb.net/asthmasense?retryWrites=true&w=majority';

async function connectDB() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const uri = process.env.MONGO_URI || DEFAULT_MONGO_URI;
    console.log('[DB] Connecting to MongoDB Atlas Cloud...');
    cached.promise = mongoose
      .connect(uri, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 10000,
      })
      .then((mongooseInstance) => {
        console.log('✅ MongoDB connected successfully to Atlas Cloud.');
        return mongooseInstance;
      })
      .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
        global._dbError = err.message;
        cached.promise = null; // Reset promise on failure so next request retries
        return null;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

function isDbConnected() {
  return mongoose.connection.readyState === 1;
}

module.exports = connectDB;
module.exports.connectDB = connectDB;
module.exports.isDbConnected = isDbConnected;
