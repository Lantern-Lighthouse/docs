---
prev:
  text: Tags
  link: '/atheja/api/search/tags/'
next: false
---

# Get Tag

## Overview {hidden}

::: details `GET` /search/tag/[tag]
Full URL
```
http://localhost:8081/api/search/tag/{tag}
```
:::

## Parameters
### Path Parameters

| Parameter             | Value    | Description | Example  |
| --------------------- | -------- | ----------- | -------- |
| **tag**<br>*required* | `string` | The tag     | `atheja` |

## Authorizations
Requires `tag.read` permissions.

## Responses
### 200
Expected response to a valid request.

```json
{
  "name": "cat",
  "count": 13
}
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```


### 404
Expected response when no tag found found.

```json
"Tag not found"
```
