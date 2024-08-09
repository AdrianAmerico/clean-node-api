import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  coverageProvider: "v8",
};

export default config;
