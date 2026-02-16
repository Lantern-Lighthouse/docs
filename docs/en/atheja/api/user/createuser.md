---
prev:
  text: User
  link: '/atheja/api/user/'
next: false
---

# Create User

## Overview {hidden}

::: details `POST` /user/create
Full URL
```
http://localhost:8081/api/user/create
```
:::

Creates new user avatar.

## Authorizations
Requires `user.create` permissions. This can be overwritten by config value `PUBLIC_USER_CREATION`.

## Responses
### 201
Expected response to a valid request

```json
"User created"
```

### 400
Expected response to a request when user creation is disabled, unauthorized

```json
"User creation is disabled or unauthorized"
```

or already exists.

```json
"User already exists"
```
