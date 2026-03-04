---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Create Entry

## Overview {hidden}

::: details `POST` /ribbit/permission/create
Full URL
```
http://localhost:8081/api/ribbit/permission/create
```
:::

Create a new permission.

## Parameters
### Post Parameters

| Parameter                      | Value    | Description                           | Example                        |
| ------------------------------ | -------- | ------------------------------------- | ------------------------------ |
| **name**<br>_required_         | `string` | Name of the role                      | `testing`                      |
| **display_name**<br>_required_ | `string` | Fancy name                            | `Testing permission`           |
| **resource**<br>_required_     | `string` | Category of a permission              | `system`                       |
| **action**<br>_required_       | `string` | What action is tied to the permission | `test`                         |
| **description**                | `string` | Role description                      | `Permission to test F3 routes` |

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 201
Expected response to a valid request.

```json
"Permission created successfully"
```

### 400
Expected response when names are missing.

```json
"Name and display name, and other resources are required"
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
"Failed to create permission"
```
