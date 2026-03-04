---
prev:
  text: Ribbit
  link: '/atheja/api/ribbit/'
next: false
---

# Setup RBAC

## Overview {hidden}

::: details `POST` /ribbit/setup
Full URL
```
http://localhost:8081/api/ribbit/setup
```
:::

Setups default roles and permissions.

## Authorizations
Requires `system.admin` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"RBAC system setup completed successfully"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized - Admin access required"
```

### 500
Expected response when entry with the ID not found.

```json
"Failed to setup RBAC system"
```
