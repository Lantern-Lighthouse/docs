---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Edit Role

## Overview {hidden}

::: details `POST` /ribbit/role/[role]/edit
Full URL
```
http://localhost:8081/api/ribbit/role/{role}/edit
```
:::

Edit display name and description.

## Parameters
### Post Parameters

| Parameter              | Value    | Description      | Example                  |
| ---------------------- | -------- | ---------------- | ------------------------ |
| **role**<br>_required_ | `string` | Name of the role | `testing`                |

### Post Parameters

| Parameter                      | Value    | Description      | Example                   |
| ------------------------------ | -------- | ---------------- | ------------------------- |
| **display_name**<br>_required_ | `string` | Fancy name       | `Testing editing role`    |
| **description**                | `string` | Role description | `Role tested for editing` |

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Role updated successfully"
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

Expected response when trying to edit system role.

```json
"Cannot edit system role"
```

### 404
Expected response when specified role is not found.

```json
"Role not found"
```

### 500
Expected response on failure.

```json
"Failed to update role"
```
