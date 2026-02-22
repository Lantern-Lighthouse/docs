---
prev:
  text: Entries
  link: '/atheja/api/search/entries/'
next: false
---

# Pop Tag

## Overview {hidden}

::: details `POST` /search/entry/[entry]/tag/pop
Full URL
```
http://localhost:8081/api/search/entry/{entry}/tag/pop
```
:::

## Parameters
### Path Parameters

| Parameter               | Value | Description  | Example |
| ----------------------- | ----- | ------------ | ------- |
| **entry**<br>_required_ | `int` | The entry ID | `1`     |

### Post Parameters

| Parameter | Value    | Description               | Example |
| --------- | -------- | ------------------------- | ------- |
| **tags**  | `string` | The tags separated by `;` | `dog;`  |

## Authorizations
Requires `system.admin` permissions or must be post owner.

## Responses
### 200
Expected response to a valid request.

```json
"Tags popped"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when no tags found found.

```json
"Entry not found"
```
