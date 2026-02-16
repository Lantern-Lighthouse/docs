---
prev:
  text: User
  link: '/atheja/api/user/'
next: false
---

# Login User

## Overview {hidden}

::: details `POST` /user/login
Full URL
```
http://localhost:8081/api/user/login
```
:::

Send login information to a client.

## Authorizations
Requires no permissions.

## Responses
### 200
Expected response to a valid request.

```json
{
  "session_token": "0c4c3f41fea385479d98255788c46fa9759643dec609c29fc77c913555cef997",
  "expires_at": "2026-01-24 17:38:20"
}
```

| Parameter                       | Value    | Description                        |
| ------------------------------- | -------- | ---------------------------------- |
| **session_token**<br>*required* | `string` | The session's identifier           |
| **expires_at**<br>*required*    | `string` | The timestamp when session expires |

### 401
Expected response when user not found or entered wrong password.

```json
"User not found or unauthorized"
```
