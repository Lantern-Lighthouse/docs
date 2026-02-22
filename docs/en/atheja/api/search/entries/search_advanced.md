---
prev:
  text: Entries
  link: '/atheja/api/search/entries/'
next: false
---

# Advanced Search

## Overview {hidden}

::: details `POST` /search
Full URL
```
http://localhost:8081/api/search
```
:::

Search with filtering.

## Parameters
### Post Parameters

| Parameter                  | Value    | Description                       | Example  |
| -------------------------- | -------- | --------------------------------- | -------- |
| **query**<br>_required_    | `string` | What will be searched.            | `search` |
| **category**<br>_required_ | `string` | Type of media to search.          | `search` |
| **nsfw**                   | `bool`   | Can include NSFW results?         | `true`   |
| **min_karma**              | `int`    | Hide results under minimal karma. | `0`      |

## Authorizations
Requires no permissions.

## Responses
### 200
Expected response to a valid request.

```json
{
  "query": "search",
  "keywords": [
    "search"
  ],
  "total_results": 2,
  "results": [
    {
      "id": 4,
      "name": "Atheja",
      "description": "Community-driven web search engine backend",
      "url": "https://github.com/Lantern-Lighthouse/Atheja",
      "category": {
        "name": "Pages",
        "id": 1
      },
      "karma": 1,
      "karma-upvotes": 1,
      "karma-downvotes": 0,
      "author": {
        "username": "pisekpiskovec",
        "displayname": "Písek Pískovec"
      },
      "tags": [
        {
          "name": "fat-free-framework",
          "id": 21
        },
        {
          "name": "php8",
          "id": 22
        },
        {
          "name": "github",
          "id": 23
        },
        {
          "name": "atheja",
          "id": 24
        },
        {
          "name": "search",
          "id": 25
        },
        {
          "name": "search-engine",
          "id": 26
        },
        {
          "name": "json",
          "id": 27
        },
        {
          "name": "backend",
          "id": 28
        },
        {
          "name": "lantern",
          "id": 29
        },
        {
          "name": "community-project",
          "id": 30
        }
      ],
      "nsfw": false,
      "created_at": "2026-01-11 20:13:13",
      "score": 4.1,
      "connection_count": 2,
      "matched_keywords": [
        "search"
      ],
      "name_matches": 0
    }
  ]
}
```

### 400
Expected response when no query parameter was sent.

```json
"Query parameter required"
```

Expected response when after sanitizing query, no valid keyword are found.

```json
"No valid keywords provided"
```
