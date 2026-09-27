import crypto from "node:crypto";

export function createOpaqueToken() {
  return crypto.randomBytes(32).toString("hex");
}

export function hashOpaqueToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}
