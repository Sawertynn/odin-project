// const { createDefaultPreset } = require("ts-jest");

// const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };

// module.exports = {
//   preset: 'ts-jest/presets/default-esm',
//   testEnvironment: 'node',
//   extensionsToTreatAsEsm: ['.ts'],
//   globals: {
//     'ts-jest': {
//       useESM: true,
//       tsconfig: 'tsconfig.test.json'
//     }
//   }
// };

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }]
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
};

