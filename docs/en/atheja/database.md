# Database

Atheja uses F3 Cortex to manage relations within the database.

Currently there are supported 3 database formats:

- [MySQL](https://www.mysql.com)
- [SQLite](sqlite.org)
- [PostgreSQL](https://www.postgresql.org)

## How to setup: Preparations

Before visiting Atheja's root endpoint or any front-end,
it is recommended to setup database connection.

For each server you'll see it's each section.
If your server is commented, uncomment it and comment others using `;`.

Line one (contains `[db]`) must not be commented out.

### MySQL

1. Open Atheja's configuration file (located at `app/Configs/atheja.ini`),
   find `DATABASE_CONNECTION_TYPE` token and edit following line to:
   ```ini
   [ATH]
   DATABASE_CONNECTION_TYPE = "mysql"
   ```

2. Rename `app/Configs/db.ini.example` to `app/Configs/db.ini`
   and edit `dsn`, `username `and `password` to your specific values
   (on lines 3-5).

3. On your database server, create new database with value specified in dsn's dbname value.

Now you can safely connect to Atheja.

### SQLite

1. Open Atheja's configuration file (located at `app/Configs/atheja.ini`),
   find `DATABASE_CONNECTION_TYPE` token and edit following line to:
   ```ini
   [ATH]
   DATABASE_CONNECTION_TYPE = "sqlite"
   ```

2. Create new folder with file `data/db.sqlite`.

3. Rename `app/Configs/db.ini.example` to `app/Configs/db.ini`
   and edit `dsn` to your specific values (if path different from step 2)
   (on line 8).

Now you can safely connect to Atheja.

### PostgreSQL

1. Open Atheja's configuration file (located at `app/Configs/atheja.ini`),
   find `DATABASE_CONNECTION_TYPE` token and edit following line to:
   ```ini
   [ATH]
   DATABASE_CONNECTION_TYPE = "pgsql"
   ```

2. Rename `app/Configs/db.ini.example` to `app/Configs/db.ini`
   and edit `dsn`, `username `and `password` to your specific values
   (on lines 11-13).

3. On your database server, create new database with value specified in dsn's dbname value.

Now you can safely connect to Atheja.

## How to setup: Initialization

After completing [first steps](<database#How to setup: Preparations>), navigate in browser (or any API client) to `/api/db/init` endpoint.

This will setup all tables and relations.

It is highly recommended to create first account. This account will be assigned with role of administrator.

