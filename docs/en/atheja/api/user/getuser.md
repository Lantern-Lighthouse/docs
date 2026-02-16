---
prev:
  text: User
  link: '/atheja/api/user/'
next: false
---

# Get a User

## Overview {hidden}

::: details `GET` /user/[username]
Full URL
```
http://localhost:8081/api/user/{username}
```
:::

## Parameters
### Path Parameters

| Parameter                  | Value    | Description              | Example         |
| -------------------------- | -------- | ------------------------ | --------------- |
| **username**<br>*required* | `string` | The username of the user | `pisekpiskovec` |

### Post Parameters

| Parameter | Value    | Description           | Example               |
| --------- | -------- | --------------------- | --------------------- |
| **email** | `string` | The email of the user | `bozablazku@kuku.prd` |

## Authorizations
Requires `user.read` permissions.

## Responses
### 200
Expected response to a valid request

```json
{
  "id": 2,
  "username": "krmeni",
  "displayname": "Krmení",
  "email": "bozablazku@kuku.prd",
  "karma": 0,
  "account_created_at": "2026-01-23 18:33:33"
}
```

| Parameter                  | Value     | Description                            |
| -------------------------- | --------- | -------------------------------------- |
| **id**<br>*required*       | `integer` | The user's ID                          |
| **username**<br>*required* | `string`  | The user's username                    |
| **displayname**            | `string`  | The user's display name                |
| **email**                  | `string`  | The user's email                       |
| **karma**<br>*required*    | `integer` | The user's trustworthiest              |
| **account_created_at**     | `string`  | The time at which the user was created |

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```
