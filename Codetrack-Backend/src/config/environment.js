import "dotenv/config";

export const environment = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 4000),
  mongoUri: process.env.MONGODB_URI,
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
  accessSecret: process.env.JWT_ACCESS_SECRET,
  refreshSecret: process.env.JWT_REFRESH_SECRET,
  mailtrapToken: process.env.MAILTRAP_TOKEN,
  mailFromEmail: process.env.MAIL_FROM_EMAIL,
  mailFromName: process.env.MAIL_FROM_NAME,
};

export function assertRuntimeConfiguration() {
  const requiredNames = [
    "MONGODB_URI",
    "JWT_ACCESS_SECRET",
    "JWT_REFRESH_SECRET",
  ];

  const missingNames = requiredNames.filter((name) => !process.env[name]);

  if (environment.nodeEnv !== "test" && !environment.mailtrapToken) {
    missingNames.push("MAILTRAP_TOKEN");
  }

  if (missingNames.length > 0) {
    throw new Error(
      `Missing required environment variables ${missingNames.join(", ")}`,
    );
  }
}
