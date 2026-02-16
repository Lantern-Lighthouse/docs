---
prev:
  text: Database
  link: '/atheja/api/db/'
next: false
---

# Setup database

## Overview {hidden}

::: details `GET` /db/setup
Full URL
```
http://localhost:8081/api/db/setup
```
:::

Setup database tables and relations.

> [!tip] Setup?
> For first-time setup, run [Initialize database](./init)

## Authorizations
Requires `system.admin` permissions.

## Responses
### 200
Expected response to a valid request

```json
"Database set up"
```

### 500
An error occured during setup.
More details provided by the endpoint.
