---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Get User's Data

## Overview {hidden}

::: details `GET` /search/user/[user]/info
Full URL
```
http://localhost:8081/api/search/user/{user}/info
```
:::

## Parameters
### Path Parameters

| Parameter              | Value    | Description | Example  |
| ---------------------- | -------- | ----------- | -------- |
| **user**<br>_required_ | `string` | Username    | `krmeni` |

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 200
Expected response to a valid request.

```json
{
  "user_id": 2,
  "username": "krmeni",
  "is_admin": true,
  "roles": [
    {
      "name": "user",
      "display_name": "User",
      "description": "User",
      "permissions": [
        {
          "name": "user.read",
          "display_name": "Read User",
          "resource": "user",
          "action": "read"
        },
        ...
      ]
    },
    ...
}
```

### 400
Expected response when permission name not provided.

```json
"Role name is required"
```

### 401
Expected response when caller is not logged in.

```json
"Unauthorized"
```

### 403
Expected response when caller doesn't have sufficient permissions.

```json
"Insufficient permissions"
```

### 404
Expected response when selected user not found.

```json
"User not found"
```
