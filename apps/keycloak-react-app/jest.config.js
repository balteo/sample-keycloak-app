module.exports = {
  displayName: 'keycloak-react-app',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.js'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/keycloak-react-app',
};
