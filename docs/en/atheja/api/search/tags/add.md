---
prev:
  text: Tags
  link: '/atheja/api/search/tags/'
next: false
---

# Add Tag

## Overview {hidden}

::: details `POST` /search/tag/add
Full URL
```
http://localhost:8081/api/search/tag/add
```
:::

## Parameters
### Post Parameters

| Parameter                 | Value    | Description  | Example  |
| ------------------------- | -------- | ------------ | -------- |
| **tagname**<br>*required* | `string` | The tag name | `atheja` |

## Authorizations
Requires `tag.create` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Tag added"
```

### 400
Expected response when creating duplicate tag.

```json
"Tag already exists"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```
