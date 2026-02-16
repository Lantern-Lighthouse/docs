---
prev:
  text: User
  link: '/atheja/api/user/'
next: false
---

# Modify a User

## Overview {hidden}

::: details `EDIT` /user/[username]/edit
Full URL
```
http://localhost:8081/api/user/{username}/edit
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
| **username** | `string` | New username | `krmeni` |
| **displayname** | `string` | New display name | `Krmení` |
| **email** | `string` | New email | `bozablazku@kuku.prd` |
| **password** | `string` | New password | `šneků` |

## Authorizations
Requires `system.admin` permissions or must be account owner.

## Responses
### 200
Expected response to a valid request

```json
"User edited"
```

### 400
Expected when username or email is already taken.
```json
"User already exists"
```

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
An error occurred during editing.
More details provided by the endpoint.
