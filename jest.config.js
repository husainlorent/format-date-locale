export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const transform = {
  "^.+\\.ts$": "ts-jest"
};
export const moduleFileExtensions = ["ts", "js"];
export const testMatch = ["**/__test__/**/*.test.ts"];
