---
prev:
  text: Entries
  link: '/atheja/api/search/entries/'
next: false
---

# Get Entry

## Overview {hidden}

::: details `GET` /search/entry/[entry]
Full URL
```
http://localhost:8081/api/search/entry/{entry}
```
:::

## Parameters
### Path Parameters

| Parameter               | Value | Description  | Example  |
| ----------------------- | ----- | ------------ | -------- |
| **entry**<br>*required* | `int` | The entry ID | `1` |

## Authorizations
Requires `entry.read` permissions.

## Responses
### 200
Expected response to a valid request.

```json
{
  "name": "FrogFind!",
  "description": "The Search Engine for Vintage Computers",
  "url": "http://frogfind.com/",
  "category": {
    "name": "Pages",
    "id": 1
  },
  "karma": 1,
  "author": {
    "username": "pisekpiskovec",
    "displayname": "Písek Pískovec",
    "karma": 7,
    "account_created": "2026-01-11 18:42:01"
  },
  "nsfw": false,
  "tags": [
    {
      "name": "frogfind",
      "id": 1
    },
    {
      "name": "search engine",
      "id": 2
    },
    {
      "name": "vintage",
      "id": 3
    },
    {
      "name": "computers",
      "id": 4
    },
    {
      "name": "vintage computers",
      "id": 5
    },
    {
      "name": "duckduckgo",
      "id": 6
    },
    {
      "name": "action",
      "id": 7
    },
    {
      "name": "retro",
      "id": 8
    },
    {
      "name": "actionretro",
      "id": 9
    },
    {
      "name": "action retro",
      "id": 10
    }
  ],
  "post_created": "2026-01-11 20:10:14",
  "post_updated": "2026-01-11 20:10:14",
  "id": 1
}
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when entry not found.

```json
"Entry not found"
```
