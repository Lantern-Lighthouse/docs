---
prev:
  text: User
  link: '/atheja/api/user/'
next: false
---

# Get User's Avatar

## Overview {hidden}

::: details `GET` /user/[username]/avatar
Full URL
```
http://localhost:8081/api/user/{username}/avatar
```
:::

## Parameters
### Path Parameters

| Parameter                  | Value    | Description              | Example         |
| -------------------------- | -------- | ------------------------ | --------------- |
| **username**<br>*required* | `string` | The username of the user | `pisekpiskovec` |

## Authorizations
Requires no permissions.

## Responses
### 200
Expected response to a valid request is a PNG image.

### 404
Expected response to a request when there are no expired sessions.

```json
"User not found"
```

### 500
An error occurred.

```json
"Unable to display avatar: ..."
```
