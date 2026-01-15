# Configuration
This page describes what each configuration value means.

## ATH

`ATH` holds variables used within Atheja's code.

Config file is located at `app/Configs/atheja.ini`

### `DATABASE_CONNECTION_TYPE`
* Default value: `"sqlite"`

What database is used for storing data.

Currently, these systems are supported:
- `sqlite`
- `mysql`
- `pgsql`

### `PUBLIC_USER_CREATION`
* Default value: `1`

Controls, if a guest can create account themselves or if it needs to be created by admin/moderator.

### `SESSION_DURATION`
* Default value: `"+24 hours"`

Determines, how long can be uses connected to the API in one session.

Uses [PHP's `strtotime`](https://www.php.net/manual/en/function.strtotime.php) to parse about any English textual datetime description into a Unix timestamp.

### `GREETING_MESSAGE`
* Default value: `"API is running"`

What message will be displayed when calling `/api` endpoint.

### `ASSUME_UNKNOWN_AS_NSFW`
* Default value: `0`

How to handle results with `null` value for whether entry is NSFW?

Usefull only for Atheja instances upgrading from pre-release to `1.0`.

## Globals

> [!caution]
> This section is for developers.

`globals` holds variables used for Fat Free Framework configuration.

### `DEBUG`
* Default value: `0`

This variable tells what level of debug information should be displayed.
Usefull when developing or reporting issues.

> [!warning]
> This will expose absolute path to the file (ex.: `/home/pisek/Projekty/PHP/Atheja/app/Controllers/User.php:32`)!
> 
> When reporting issues, please be aware not to share private informations!

> [!tip]
> When developing, it is recomended to set this value to `3`.
