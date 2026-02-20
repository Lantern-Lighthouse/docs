---
prev:
  text: Tags
  link: '/atheja/api/search/tags/'
next: false
---

# Get Tags

## Overview {hidden}

::: details `POST` /search/tag/[tag]/delete
Full URL
```
http://localhost:8081/api/search/tag/{tag}/delete
```
:::

## Parameters
### Path Parameters

| Parameter             | Value    | Description | Example  |
| --------------------- | -------- | ----------- | -------- |
| **tag**<br>*required* | `string` | The tag     | `atheja` |

## Authorizations
Requires `tag.delete` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Tag deleted"
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
Expected response when tag couldn't be deleted.

```json
"Tag not deleted"
```
