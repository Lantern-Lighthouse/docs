---
prev:
  text: Database
  link: '/atheja/api/db/'
next: false
---

# Setdown database

## Overview {hidden}

::: details `GET` /db/setdown
Full URL
```
http://localhost:8081/api/db/setdown
```
:::

Clears the tables.

## Authorizations
Requires `system.admin` permissions.

## Responses
### 200
Expected response to a valid request

```json
"Database set down"
```

### 500
An error occured during setup.
More details provided by the endpoint.
