//postgres port : 5432
// Server [localhost]: localhost
// Database [postgres]: postgres
// Port [5432]: 5432
// Username [postgres]: postgres
// Password for user postgres:
// psql (15.6)
// WARNING: Console code page (437) differs from Windows code page (1252)
//          8-bit characters might not work correctly. See psql reference
//          page "Notes for Windows users" for details.
// Type "help" for help.

// postgres=# \l
module.exports = {
  "development": {
    "username": "postgres",
    "password": "Felo2590",
    "database": "pdfchat",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "pdfchat",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "pdfchat",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
