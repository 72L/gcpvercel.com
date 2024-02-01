module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    () =>
      'npx ts-unused-exports ./tsconfig.json --excludePathsFromReport=pages;middleware;app;example;tailwind.config.ts --exitWithCount',
  ],
  '**/*.ts?(x)': () => 'tsc --noEmit --pretty',
  '*.json': ['prettier --write'],
};
