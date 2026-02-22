---
prev:
  text: Entries
  link: '/atheja/api/search/entries/'
next: false
---

# Create Entry

## Overview {hidden}

::: details `POST` /search/entry/create
Full URL
```
http://localhost:8081/api/search/entry/create
```
:::

## Parameters
### Post Parameters

| Parameter                   | Value    | Description                                             | Example                                |
| --------------------------- | -------- | ------------------------------------------------------- | -------------------------------------- |
| **fetch-name-from-site**    | `bool`   | Try to get page name from URL                           | `true`                                 |
| **page-name**<br>_required_ | `string` | Page name. Used as fallback for `fetch-name-from-site`. | `FrogFind`                             |
| **page-desc**               | `string` | Page description.                                       | `Search engine for vintage computers.` |
| **page-url**<br>_required_  | `string` | The tag name                                            | `http://frogfind.com/`                 |
| **tags**                    | `string` | The tags separated by `;`                               | `frog;search;search engine`            |
| **is-nsfw**                 | `bool`   | Does the page contains NSFW content?                    | `0`                                    |

## Authorizations
Requires `entry.create` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Entry added"
```

### 400
Expected response when creating duplicate entry.

```json
"URL already found"
```

Expected response when fetching site name failed and no fallback is found.

```json
"Error getting page title. Please insert the name manually."
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when creating entry with no URL.

```json
"URL not found"
```

Expected response when page name not found.

```json
"Page name not found"
```
