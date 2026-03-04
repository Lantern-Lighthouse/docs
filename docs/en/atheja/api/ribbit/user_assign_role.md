---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Assign Role to User

## Overview {hidden}

::: details `POST` /ribbit/user/[user]/role/assign
Full URL
```
http://localhost:8081/api/ribbit/user/{user}/role/assign
```
:::

## Parameters
### Path Parameters

| Parameter              | Value    | Description           | Example  |
| ---------------------- | -------- | --------------------- | -------- |
| **user**<br>_required_ | `string` | Username of the user. | `krmeni` |

### Post Parameters

| Parameter              | Value    | Description          | Example   |
| ---------------------- | -------- | -------------------- | --------- |
| **role**<br>_required_ | `string` | What role to assign. | `testing` |

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Role assigned to user successfully"
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

### 500
Expected response when assignment failed.

```json
"Failed to assign role to user"
```
