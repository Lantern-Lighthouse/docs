---
prev:
  text: Search Categories
  link: '/atheja/api/search/categories'
next: false
---

# Get a Category

## Overview {hidden}

::: details `GET` /search/category
Full URL
```
http://localhost:8081/api/search/category
```
:::

## Authorizations
Requires `category.read` permissions.

## Responses
### 200
Expected response to a valid request.

```json
{
  "Pages": {
    "id": 1,
    "type": "articles",
    "icon": "language"
  },
  "Images": {
    "id": 2,
    "type": "gallery",
    "icon": "photo"
  }
}
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```
