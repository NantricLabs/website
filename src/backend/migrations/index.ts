import * as migration_20250315_230352 from './20250315_230352';

export const migrations = [
  {
    up: migration_20250315_230352.up,
    down: migration_20250315_230352.down,
    name: '20250315_230352'
  },
];
