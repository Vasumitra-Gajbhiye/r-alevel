import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

type WindowConfig = {
  limit: number;
  windowSec: number;
};

/**
 * Simple IP-based sliding window rate limiter.
 * Returns a NextResponse with 429 if the limit is exceeded, otherwise null.
 */
export async function enforceRateLimit(
  req: Request,
  routeKey: string,
  { limit, windowSec }: WindowConfig
) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const now = Math.floor(Date.now() / 1000);
  const windowStart = Math.floor(now / windowSec) * windowSec;
  const key = `rl:${routeKey}:${ip}:${windowStart}`;

  const current = (await redis.incr(key)) as number;
  if (current === 1) {
    await redis.expire(key, windowSec);
  }

  if (current > limit) {
    return NextResponse.json(
      { error: "Too many requests, please try again later." },
      { status: 429 }
    );
  }

  return null;
}

