---
prev:
  text: Tags
  link: '/atheja/api/search/tags/'
next: false
---

# Get Tags

## Overview {hidden}

::: details `GET` /search/tag
Full URL
```
http://localhost:8081/api/search/tag
```
:::

List of all tags.

## Authorizations
Requires `tag.read` permissions.

## Responses
### 200
Expected response to a valid request.

```json
[
  ...
]
```
> A list of tag names will be printed.

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
