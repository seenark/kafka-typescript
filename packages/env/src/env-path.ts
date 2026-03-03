import process from "node:process";

export function getEnvPath(
  environment: typeof process.env.NODE_ENV,
  folderPath: string
) {
  if (environment === "local") return `${folderPath}/.env.local`;
  if (environment === "development") return `${folderPath}/.env`;
  if (environment === "uat") return `${folderPath}/.env.uat`;
  if (environment === "test") return `${folderPath}/.env.test`;
  if (environment === "production") return `${folderPath}/.env.prod`;
  return `${folderPath}/.env.local`;
}

export function getEnvironment(): typeof process.env.NODE_ENV {
  return process.env.NODE_ENV || "local";
}
