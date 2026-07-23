import assert from 'assert';
import fetch from 'node-fetch';

async function testMetadata() {
  const res = await fetch('http://localhost:8084/api/metadata');
  const data = await res.json();

// check if values are there
  assert(data.fare_rate !== undefined);
  assert(data.peak_multiplier !== undefined);

  console.log("Test passed ");
}

testMetadata();
