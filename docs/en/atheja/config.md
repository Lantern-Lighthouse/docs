# Configuration
This page describes what each configuration value means.

> [!important]
> This does not mean, that every variable should be changed as it can break the whole project.

## ATH

`ATH` holds variables used within Atheja's code.

### `VERSION`
Atheja's current version.

Following `GENERATION.MAJOR.MINOR` syntax:
* `GENERATION` - changes when there is no backward compatibility. Usualy on endpoint deletion.
* `MAJOR` - changes when there are new features.
* `MINOR` - changes when there are bug fixes released.

### `vAPI`
Mirrors current generation.

### `CODENAME`
Every generation or major change brings its own codename.

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

### `SETUP_FINISHED`

Value holds information for the back-end server if the setup is completed.

## Configs

`configs` holds paths leading to another config files used within the project.

### Syntax

```ini
path/to/config/file.ini = 1 # Boolean as int
path/to/config/another/file.ini = true # Boolean as bool
```

When using Responsivity's `update_config_value`, the `true` is changed to `1`.

## Globals

`globals` holds variables used for Fat Free Framework configuration.

### `AUTOLOAD`
* Default value: `"app/"`

This variable tells the framework what is the application's entrypoint.

Changing this variable breaks the whole application unless the paths are changed accordingly.

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

### `UI`
* Default value: `"app/Views/"`

> [!note] Unused variable
> This variable is unused and will be removed in Atheja 1.1.0
