import redis

def get_redis():
    try:
        r = redis.Redis(host="redis", port=6379, decode_responses=True)
        r.ping()
        return r
    except:
        return None
