---
prev:
  text: Entries
  link: '/atheja/api/search/entries/'
next: false
---

# Rate Entry

## Overview {hidden}

::: details `POST` /search/entry/[entry]/rate
Full URL
```
http://localhost:8081/api/search/entry/{entry}/rate
```
:::

## Parameters
### Path Parameters

| Parameter               | Value | Description  | Example |
| ----------------------- | ----- | ------------ | ------- |
| **entry**<br>_required_ | `int` | The entry ID | `1`     |

### Post Parameters

| Parameter                   | Value | Description                                                                  | Example |
| --------------------------- | ----- | ---------------------------------------------------------------------------- | ------- |
| **vote_type**<br>_required_ | `int` | Vote type: -1 for downvote, 1 for upvote; Other values will result in error. | `-1`    |

## Authorizations
Requires `entry.rate` permissions.

## Responses
### 200
Expected response when removing vote.

```json
{
  "message": "Vote removed",
  "upvotes": ...,
  "downvotes": ...,
  "karma": ...,
  "user_vote": ...
}
```

Expected response when changing vote.

```json
{
  "message": "Vote updated",
  "upvotes": ...,
  "downvotes": ...,
  "karma": ...,
  "user_vote": ...
}
```

Expected response when voting for first time.

```json
{
  "message": "Vote added",
  "upvotes": ...,
  "downvotes": ...,
  "karma": ...,
  "user_vote": ...
}
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when no tags found found.

```json
"Entry not found"
```
