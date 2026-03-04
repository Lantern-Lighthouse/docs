---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Delete Entry

## Overview {hidden}

::: details `POST` /ribbit/role/[role]/delete
Full URL
```
http://localhost:8081/api/ribbit/role/{role}/delete
```
:::

Delete a role.

## Parameters
### Path Parameters

| Parameter              | Value    | Description   | Example   |
| ---------------------- | -------- | ------------- | --------- |
| **role**<br>_required_ | `string` | The role name | `testing` |

## Authorizations
Requires `system.rbac` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Role deleted successfully"
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
"Failed to delete role"
```
