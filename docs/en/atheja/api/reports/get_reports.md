---
prev:
  text: Reports
  link: '/atheja/api/reports'
next: false
---

# Get Reports

## Overview {hidden}

::: details `GET` /report
Full URL
```
http://localhost:8081/api/report
```
:::

## Parameters
### Get Parameters

| Parameter    | Value    | Description                                                                          | Example                                                                 |
| ------------ | -------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **filter**   | `string` | Filter by report states. Defaults to `open`.                                         | `open`, `close`, `assigned`, `unassigned`, `assigned_to`, `reported_by` |
| **resolver** | `string` | Username of a user. Required parameter for `assigned_to` filter. Defaults to `null`. | `pisekpiskovec`                                                         |
| **reporter** | `string` | Username of a user. Required parameter for `assigned_to` filter. Defaults to `null`. | `pisekpiskovec`                                                         |

## Authorizations
Requires Moderator or Admin role.

## Responses
### 200
Expected response to a valid request.

```json
{
  "1": {
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
  },
  "3": {
    "reporter": "pisekpiskovec",
    "reported": "krmeni",
    "reason": "6 The \"Right to be Forgotten\" - GDPR/EU Specific",
    "reported_at": "2026-03-08 17:45:37",
    "last_update_at": null,
    "assigned_to": null,
    "is_resolved": false
  }
}
```

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
