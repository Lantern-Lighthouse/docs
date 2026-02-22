---
prev:
  text: Entries
  link: '/atheja/api/search/entries/'
next: false
---

# Report Entry

## Overview {hidden}

::: details `GET` /search/entry/[entry]/report
Full URL
```
http://localhost:8081/api/search/entry/{entry}/report
```
:::

## Parameters
### Path Parameters

| Parameter               | Value | Description  | Example |
| ----------------------- | ----- | ------------ | ------- |
| **entry**<br>_required_ | `int` | The entry ID | `1`     |

### Post Parameters

| Parameter                | Value    | Description          | Example                     |
| ------------------------ | -------- | -------------------- | --------------------------- |
| **reason**<br>*required* | `string` | Reason for reporting | `Violation Of Black Colors` |

## Authorizations
Requires `entry.report` permissions.

## Responses
### 200
Expected response to a valid request.

```json
"Report created"
```

### 401
Expected response when caller doesn't have sufficient permissions.

```json
"Unauthorized"
```

### 404
Expected response when specified (reported) entry not found.

```json
"Entry not found"
```

### 500
An error occurred during reporting.

```json
"Failed to report"
```
