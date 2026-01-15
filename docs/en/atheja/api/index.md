# Overview

> [!note] Is Atheja installed?
> This part counts with the fact, that you have Atheja installed and set up.
> If that's not the case, see [this](/atheja/#getting-started) first.

This documentation doesn't provide a way to test the API. In order to facilitate testing, we recommend the following tools:

* [cURL](https://curl.se/) (command-line)
* [Yaak](https://yaak.app) (recommended)
* Your web browser, if you don't need to send headers or a request body

Once you have a working client, you can test that Atheja works by making a `GET` request to `http://localhost:8081/api`:
```json
{
  "message": "API is running",
  "version": {
    "API version": 1,
    "Atheja version": "1.1.1",
    "Atheja codename": "Taygete"
  },
  "stats": {
    "categories": 2,
    "entries": 0,
    "sessions": 0,
    "tags": 0,
    "users": 0,
    "votes": 0,
    "reports": 0
  }
}
```
If you got a response similar to the one above, you can use the Lantern API!

## Authentication

The API's option for authentication: Bearer Token. All Tokens are tied to a Lantern user and use the `Bearer Token` header of the request.

Example:
```
Authorization: Bearer 46ea2eab97be41db656b845c2072bee4d1493a9dddae6932f12cded187e0a15d
```

For most of request you'll need a token. There are some that don't need a token, but on the other hand they can show you less informations.
Generally speaking, only the following types of requests doesn't require a token:
* those which request data (such as searching or user viewing)

Request that requires a token will return a 401 error.

### TokenAuth
> **Security scheme type:** Bearer
>
> **Header parameter name:** Authorization

## Ratelimits

Currently, the Atheja API does not have limits on how much requests can one token make.

## User Agents

The API doesn't care what user agent are you providing.

## Versioning

Atheja follows a simple pattern for its API versioning. In the event of a breaking API change, the API version is bumped, and migration steps will be published below.

When an API is no longer the current one, it will immediately be considered deprecated. No more support will be provided for API versions older than the current one.

> [!info] x.y.z
> This rule does not apply to the `z` or `patch` number.

### Migrations

Inside the following spoiler, you will be able to find all breaking changes between versions of the Lantern API, accompanied by tips and guide to migrate applications to newer version.

::: details Atheja 1.0.2 to 1.1.1
This update shouldn't break anything.

If you have changed configuration in `app/Configs/config.ini`, move them to a separate file `app/Configs/atheja.ini` under a `[ATH]` category.
:::

---

> Credits: https://docs.modrinth.com/api
