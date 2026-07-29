require('dotenv').config();
const app = require('./api/index');
const connectDB = require('./lib/db');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`
======================================================
🚀 AsthmaSense AI Backend Server is Running!
📡 Listening on: http://localhost:${PORT}
------------------------------------------------------
📋 Key Endpoints:
   • Health Check : GET  http://localhost:${PORT}/api/breathing/health
   • Grok AI Chat : POST http://localhost:${PORT}/api/chat
   • Chat History : GET  http://localhost:${PORT}/api/chat/history
   • Auth Login   : POST http://localhost:${PORT}/api/auth/login
   • Symptoms Log : POST http://localhost:${PORT}/api/data/symptoms
======================================================
`);

  // Connect to MongoDB immediately on startup
  try {
    const conn = await connectDB();
    if (conn) {
      console.log('✅ MongoDB status: CONNECTED to database.');
    } else {
      console.log('⚠️ MongoDB status: NOT CONNECTED (Check MONGO_URI in .env)');
    }
  } catch (err) {
    console.log('⚠️ MongoDB connection error:', err.message);
  }
});
