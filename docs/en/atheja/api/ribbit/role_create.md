---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Create Role

## Overview {hidden}

::: details `POST` /ribbit/role/create
Full URL
```
http://localhost:8081/api/ribbit/role/create
```
:::

Create a new role.

## Parameters
### Post Parameters

| Parameter                      | Value    | Description      | Example                  |
| ------------------------------ | -------- | ---------------- | ------------------------ |
| **name**<br>_required_         | `string` | Name of the role | `testing`                |
| **display_name**<br>_required_ | `string` | Fancy name       | `Testing role`           |
| **description**                | `string` | Role description | `Role to test F3 routes` |

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 201
Expected response to a valid request.

```json
"Role created successfully"
```

### 400
Expected response when names are missing.

```json
"Name and display name are required"
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

### 500
Expected response on failure.

```json
"Failed to create role"
```
