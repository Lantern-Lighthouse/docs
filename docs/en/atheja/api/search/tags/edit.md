---
prev:
  text: Tags
  link: '/atheja/api/search/tags/'
next: false
---

# Edit Tag

## Overview {hidden}

::: details `POST` /search/tag/[tag]/edit
Full URL
```
http://localhost:8081/api/search/tag/{tag}/edit
```
:::

List of all tags.

## Parameters
### Path Parameters

| Parameter             | Value    | Description | Example  |
| --------------------- | -------- | ----------- | -------- |
| **tag**<br>*required* | `string` | The tag     | `atheja` |

### Post Parameters

| Parameter                 | Value    | Description  | Example   |
| ------------------------- | -------- | ------------ | --------- |
| **tagname**<br>*required* | `string` | New tag name | `lantern` |

## Authorizations
Requires `tag.update` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Tag edited"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when no tags found found.

```json
"Tag not found"
```

### 500
Expected response when edit couldn't be saved.

```json
"Changes not saved"
```
