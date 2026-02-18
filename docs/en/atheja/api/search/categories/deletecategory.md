---
prev:
  text: Search Categories
  link: '/atheja/api/search/categories'
next: false
---

# Delete a Category

## Overview {hidden}

::: details `POST` /search/category/[category]/delete
Full URL
```
http://localhost:8081/api/search/category/{category}/delete
```
:::

## Parameters
### Path Parameters

| Parameter              | Value    | Description              | Example  |
| ---------------------- | -------- | ------------------------ | -------- |
| **name**<br>*required* | `string` | The name of the category | `Videos` |

## Authorizations
Requires `category.delete` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Category deleted"
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
An error occurred during deletion.

```json
"Unable to delete category"
```
