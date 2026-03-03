/** biome-ignore-all lint/complexity/noBannedTypes:  I wanna use */
type Env = {};

declare global {
  // biome-ignore lint/style/noNamespace: I wanna use
  namespace NodeJS {
    interface ProcessEnv extends Env {
      NODE_ENV: "development" | "production" | "test" | "uat" | "local";
    }
  }
}
export type IEnv = Env;
