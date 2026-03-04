---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Revoke Permission from Role

## Overview {hidden}

::: details `POST` /ribbit/role/[role]/permission/revoke
Full URL
```
http://localhost:8081/api/ribbit/role/{role}/permission/revoke
```
:::

## Parameters
### Path Parameters

| Parameter              | Value    | Description                                 | Example   |
| ---------------------- | -------- | ------------------------------------------- | --------- |
| **role**<br>_required_ | `string` | Name of the role to revoke permission from. | `testing` |

### Post Parameters

| Parameter                    | Value    | Description                | Example   |
| ---------------------------- | -------- | -------------------------- | --------- |
| **permission**<br>_required_ | `string` | What permission to revoke. | `testing` |

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Permission revoked from role successfully"
```

### 400
Expected response when permission name not provided.

```json
"Permission name is required"
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
Expected response when assignment failed.

```json
"Failed to revoke permission from role"
```
