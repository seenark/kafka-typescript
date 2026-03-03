import { config } from "@dotenvx/dotenvx"
import Bun from "bun"
import { Schema as S } from "effect"
import { getEnvironment, getEnvPath } from "./env-path"

config({
  path: getEnvPath(getEnvironment(), `${process.cwd()}/envs/server`),
})

const EnvSchema = S.Struct({
  PORT: S.NumberFromString,
})

export const getEnv = () => S.decodeUnknownSync(EnvSchema)(Bun.env)
