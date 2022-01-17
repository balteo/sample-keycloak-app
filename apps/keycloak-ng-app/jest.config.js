module.exports = {
  displayName: 'keycloak-ng-app',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  moduleNameMapper: {
    "^@keycloak-auth(.*)$": "<rootDir>/../../libs/keycloak-auth/src/lib$1"
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/apps/keycloak-ng-app',
  transform: {
    '^.+\\.(ts|js|html|mjs)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
