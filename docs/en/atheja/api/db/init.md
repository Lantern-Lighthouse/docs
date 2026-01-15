---
prev:
  text: Database
  link: '/atheja/api/db/'
next: false
---

# Initialize database

## Overview {hidden}

::: details `GET` /db/init
Full URL
```
http://localhost:8081/api/db/init
```
:::

Setup database tables, relations and fill basic categories (Pages, Images).

## Authorizations
If no users exists, run as administrator, otherwise need `system.admin` permissions.

## Responses
### 200
Expected response to a valid request

```json
"Database initialised"
```

### 500
An error occured during initialization.
More details provided by the endpoint.
