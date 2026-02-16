---
prev:
  text: User
  link: '/atheja/api/user/'
next: false
---

# Report a User

## Overview {hidden}

::: details `GET` /user/[username]/report
Full URL
```
http://localhost:8081/api/user/{username}/report
```
:::

## Parameters
### Path Parameters

| Parameter                  | Value    | Description              | Example         |
| -------------------------- | -------- | ------------------------ | --------------- |
| **username**<br>*required* | `string` | The username of the user | `pisekpiskovec` |

### Post Parameters

| Parameter                | Value    | Description          | Example                     |
| ------------------------ | -------- | -------------------- | --------------------------- |
| **reason**<br>*required* | `string` | Reason for reporting | `Violation Of Black Colors` |

## Authorizations
Requires `user.report` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Report created"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when specified (reported) user not found.

```json
"User not found"
```

### 500
An error occurred during reporting.

```json
"Failed to report"
```
