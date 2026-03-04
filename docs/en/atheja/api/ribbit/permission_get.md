---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Get Entry

## Overview {hidden}

::: details `GET` /ribbit/permission
Full URL
```
http://localhost:8081/api/ribbit/permission
```
:::

Returns a list of available permissions.

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 200
Expected response to a valid request.

```json
[
  {
    "id": 1,
    "name": "user.create",
    "display_name": "Create User",
    "description": null,
    "resource": "user",
    "action": "create",
    "is_system_permission": true,
    "created_at": "2026-01-11 18:29:44"
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
