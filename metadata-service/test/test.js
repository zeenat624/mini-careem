import assert from 'assert';
import fetch from 'node-fetch';

async function testMetadata() {
  const res = await fetch('http://localhost:8084/api/metadata');
  const data = await res.json();

  // check fare and peak values exist
  assert(data.fare_rate !== undefined);
  assert(data.peak_multiplier !== undefined);

  // check values are numbers
  assert(typeof data.fare_rate === 'number');
  assert(typeof data.peak_multiplier === 'number');

  // check values are positive
  assert(data.fare_rate >= 0);
  assert(data.peak_multiplier >= 0);

  console.log("All tests passed ");
}

testMetadata();
