---
prev:
  text: User
  link: '/atheja/api/user/'
next: false
---

# Delete a User

## Overview {hidden}

::: details `GET` /user/[username]/delete
Full URL
```
http://localhost:8081/api/user/{username}/delete
```
:::

## Parameters
### Path Parameters

| Parameter    | Value    | Description              | Example         |
| ------------ | -------- | ------------------------ | --------------- |
| **username** | `string` | The username of the user | `pisekpiskovec` |

### Post Parameters

| Parameter    | Value    | Description              | Example               |
| ------------ | -------- | ------------------------ | --------------------- |
| **username** | `string` | The username of the user | `krmeni` |
| **email**    | `string` | The email of the user    | `bozablazku@kuku.prd` |

## Authorizations
Requires `system.admin` permissions or must be account owner.

## Responses
### 200
Expected response to a valid request.

```json
```
> No response.

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when specified user not found.

```json
"User not found"
```

### 500
An error occurred during deletion.

```json
"Unable to delete user"
```
