const Redis = require("ioredis");
const { REDIS_KEYS } = require("../lib/constants.js");

const redis = new Redis({
  host: "redis-14080.c250.eu-central-1-1.ec2.redns.redis-cloud.com",
  port: 14080,
  password: "KTBa2pY4VZsQPa2cFOHmzaBS52sbTT9E",
});

const enqueueJobInQueue = async (job) => {
  return await redis.lpush(
    REDIS_KEYS.VIDEO_TRANSCODING_QUEUE,
    JSON.stringify(job)
  );
};

const deQueueJobFromQueue = async () => {
  const job = await redis.rpop(REDIS_KEYS.VIDEO_TRANSCODING_QUEUE);

  return job ? JSON.parse(job) : null;
};

const getKey = async (key) => {
  return await redis.get(key);
};

const deleteKey = async (key) => {
  return await redis.del(key);
};
async function setKey(key, value, options = {}) {
  if (!redis) {
    throw new Error(
      "Redis client is not initialized. Please connect to Redis first."
    );
  }

  try {
    const defaultOptions = {
      expire: 0,
      setIfNotExist: false,
    };
    const mergedOptions = { ...defaultOptions, ...options };

    const params = [key, value];
    if (mergedOptions.expire > 0) {
      params.push("EX", mergedOptions.expire);
    }
    if (mergedOptions.setIfNotExist) {
      params.push("NX");
    }

    const response = await redis.send_command("SET", params);

    if (response === "OK") {
      console.log(`${key} set to ${value}`);
      return true;
    }
    throw new Error("Failed to set key");
  } catch (error) {
    console.error(`Error setting key ${key}:`, error);
    return false;
  }
}

const increment = async (key) => {
  const value = await redis.incr(key);
  console.log("Incremented key: ", key, "value: ", value);
  return value;
};

const decrement = async (key) => {
  const value = await redis.decr(key);
  console.log("Incremented key: ", key, "value: ", value);
  return value;
};

const getQueueLength = async () => {
  return await redis.llen(REDIS_KEYS.VIDEO_TRANSCODING_QUEUE);
};

module.exports = {
  enqueueJobInQueue,
  deQueueJobFromQueue,
  getKey,
  deleteKey,
  setKey,
  increment,
  decrement,
  getQueueLength,
};
