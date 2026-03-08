---
prev:
  text: Reports
  link: '/atheja/api/reports'
next: false
---

# Get Report

## Overview {hidden}

::: details `GET` /report/[reportID]
Full URL
```
http://localhost:8081/api/report/{reportID}
```
:::

## Parameters
### Path Parameters

| Parameter                  | Value | Description | Example |
| -------------------------- | ----- | ----------- | ------- |
| **reportID**<br>_required_ | `int` |             | `4`     |

## Authorizations
Requires Moderator or Admin role.

## Responses
### 200
Expected response to a valid request.

::: details User reported
```json
{
  "reporter": "pisekpiskovec",
  "reported": "krmeni",
  "reason": "6 The \"Right to be Forgotten\" - GDPR/EU Specific",
  "reported_at": "2026-03-08 17:45:37",
  "last_update_at": null,
  "assigned_to": null,
  "is_resolved": false
}
```
:::

::: details Post reported
```json
{
  "reporter": "pisekpiskovec",
  "reported": {
    "page_name": "FrogFind!",
    "page_description": "The Search Engine for Vintage Computers",
    "page_url": "http://frogfind.com/",
    "entry_author": "pisekpiskovec",
    "is_nsfw": false
  },
  "reason": "1 Outdated Information - the content no longer exists",
  "reported_at": "2026-01-13 20:57:42",
  "last_update_at": null,
  "assigned_to": null,
  "is_resolved": false
}
```
:::

### 201
Expected response when no report found.

```json
"No report found"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```
