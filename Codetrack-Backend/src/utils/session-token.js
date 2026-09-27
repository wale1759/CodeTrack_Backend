import jwt from "jsonwebtoken";

import { environment } from "../config/environment";

const accessCookieName = "codetrack_access";
const refreshCookieName = "codetrack_refresh";

// Token creation function for both access and refresh token- Authentication - when a user is registered or signed-in
function signToken(user, secret, type, expiresIn) {
  return jwt.sign(
    { sub: user.id, type, sessionVersion: user.sessionVersion },
    secret,
    { expiresIn },
  );
}

export function createSessionTokens(user) {
  return {
    accessToken: signToken(user, environment.accessSecret, "access", "15m"),
    refreshToken: signToken(user, environment.refreshSecret, "refresh", "7d"),
  };
}
