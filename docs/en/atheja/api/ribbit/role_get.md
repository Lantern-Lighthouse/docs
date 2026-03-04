---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Get Entry

## Overview {hidden}

::: details `GET` /ribbit/role
Full URL
```
http://localhost:8081/api/ribbit/role
```
:::

Returns a list of available roles.

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 200
Expected response to a valid request.

```json
[
  {
    "id": 1,
    "name": "admin",
    "display_name": "Administrator",
    "description": "Full system administrator",
    "is_system_role": true,
    "permissions": [
      {
        "id": 1,
        "name": "user.create",
        "display_name": "Create User",
        "resource": "user",
        "action": "create"
      },
      ...
  },
  ...
]
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
