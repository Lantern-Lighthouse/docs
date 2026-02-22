---
prev:
  text: Entries
  link: '/atheja/api/search/entries/'
next: false
---

# Edit Entry

## Overview {hidden}

::: details `POST` /search/entry/[entry]/edit
Full URL
```
http://localhost:8081/api/search/entry/{entry}/edit
```
:::

## Parameters
### Path Parameters

| Parameter               | Value | Description  | Example |
| ----------------------- | ----- | ------------ | ------- |
| **entry**<br>_required_ | `int` | The entry ID | `1`     |

### Post Parameters

| Parameter         | Value    | Description                                     | Example                   |
| ----------------- | -------- | ----------------------------------------------- | ------------------------- |
| **page-name**     | `string` | New page name                                   | `Seznam.cz`               |
| **page-desc**     | `string` | New page description                            | `...najdu tam, co neznám` |
| **page-url**      | `string` | New page URL                                    | `https://seznam.cz/`      |
| **view-category** | `int`    | Content type category                           | `2`                       |
| **favicon**       | `string` | New page favicon image encoded as Base64 string |                           |

## Authorizations
Requires `entry.update` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Entry edited"
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

### 500
Expected response when edit couldn't be saved.
