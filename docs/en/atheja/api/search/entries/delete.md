---
prev:
  text: Entries
  link: '/atheja/api/search/entries/'
next: false
---

# Delete Entry

## Overview {hidden}

::: details `POST` /search/entry/[entry]/delete
Full URL
```
http://localhost:8081/api/search/entry/{entry}/delete
```
:::

## Parameters
### Path Parameters

| Parameter               | Value    | Description  | Example |
| ----------------------- | -------- | ------------ | ------- |
| **entry**<br>_required_ | `string` | The entry ID | `1`     |

## Authorizations
Requires `entry.delete` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Entry deleted"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when entry with the ID not found.

```json
"Entry not found"
```
