---
prev:
  text: Database
  link: '/atheja/api/db/'
next: false
---

# Clean sessions

## Overview {hidden}

::: details `GET` /db/clean/sessions
Full URL
```
http://localhost:8081/api/db/clean/sessions
```
:::

Cleans all expired sessions.

## Authorizations
Requires `system.admin` permissions.

## Responses
### 200
Expected response to a valid request

```json
```
> No response.

### 404
Expected response to a request when there are no expired sessions.

```json
"No expired sessions found"
```
