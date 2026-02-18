---
prev:
  text: Search Categories
  link: '/atheja/api/search/categories'
next: false
---

# Create a Category

## Overview {hidden}

::: details `POST` /search/category/create
Full URL
```
http://localhost:8081/api/search/category/create
```
:::

## Authorizations
Requires `category.create` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Category created"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 500
An error occurred during creating.
More details provided by the endpoint.
