import * as migration_20250319_201412 from './20250319_201412';

export const migrations = [
  {
    up: migration_20250319_201412.up,
    down: migration_20250319_201412.down,
    name: '20250319_201412'
  },
];
