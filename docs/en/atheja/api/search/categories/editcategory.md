---
prev:
  text: Search Categories
  link: '/atheja/api/search/categories'
next: false
---

# Edit a Category

## Overview {hidden}

::: details `POST` /search/category/[category]/edit
Full URL
```
http://localhost:8081/api/search/category/{category}/edit
```
:::

## Parameters
### Path Parameters

| Parameter              | Value    | Description              | Example  |
| ---------------------- | -------- | ------------------------ | -------- |
| **name**<br>*required* | `string` | The name of the category | `Videos` |

### Post Parameters

| Parameter | Value    | Description                   | Example    |
| --------- | -------- | ----------------------------- | ---------- |
| **name**  | `string` | The name of the category      | `Video`    |
| **type**  | `string` | The view type of the category | `gallery`  |
| **icon**  | `string` | The icon of the category      | `videocam` |

## Authorizations
Requires `category.update` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Category edited"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when specified category not found.

```json
"Category not found"
```

### 500
An error occured during setup.
More details provided by the endpoint.
