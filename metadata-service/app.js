import express from 'express';
import { createClient } from 'redis';

const app = express();

/*
  Connect to Redis (runs in Docker with name "redis")
  We use Redis because it's fast (data stored in RAM)
*/
const client = createClient({
  url: 'redis://redis:6379'
});

// If Redis gives error, just print it (don’t crash app)
client.on('error', () => console.log('Redis error'));

// Connect to Redis
await client.connect();

/*
  Default values (used when Redis is down or empty)
*/
const DEFAULT_DATA = {
  fare_rate: 50,
  peak_multiplier: 1.0
};

/*
  API: GET /api/metadata
  Returns fare rate and peak multiplier
*/
app.get('/api/metadata', async (req, res) => {
  try {
    // Try to get data from Redis
    const fare = await client.get('fare_rate');
    const peak = await client.get('peak_multiplier');

    // If data exists in Redis → return it
    if (fare && peak) {
      return res.json({
        fare_rate: Number(fare),
        peak_multiplier: Number(peak),
        source: "redis" // tells data came from cache
      });
    }
  } catch {
    // If Redis fails, we ignore and use fallback
    console.log("Using fallback (Redis not working)");
  }

  // If Redis is empty or down then it will return default values
  res.json({
    ...DEFAULT_DATA,
    source: "fallback"
  });
});

/*
  Start server on port 8084
*/
app.listen(8084, () => {
  console.log("Metadata service running on port 8084");
});
