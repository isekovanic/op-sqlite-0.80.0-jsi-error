import type { DB, OPSQLiteProxy } from '@op-engineering/op-sqlite';
let sqlite: OPSQLiteProxy;

try {
    sqlite = require('@op-engineering/op-sqlite');
} catch (e) {
    console.error('Caught an error while importing: ', e);
}

const DB_NAME = 'op-sqlite-android-jsi-repro';
const DB_LOCATION = 'databases';

export class SqliteClient {
    static db: DB | undefined;

    static openDB = async () => {
        try {
            if (sqlite === undefined) {
                throw new Error(
                    'Please install the "@op-engineering/op-sqlite" package if you\'d like to use the SQLiteClient.',
                );
            }
            this.db = sqlite.open({
                location: DB_LOCATION,
                name: DB_NAME,
            });

            this.db?.execute('PRAGMA foreign_keys = ON', []);
        } catch (e) {
            console.error(`Error opening database ${DB_NAME}: ${e}`);
        }
    };
}
