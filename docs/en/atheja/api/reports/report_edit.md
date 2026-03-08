---
prev:
  text: Reports
  link: '/atheja/api/reports'
next: false
---

# Edit a Report

## Overview {hidden}

::: details `POST` /report/[reportID]/edit
Full URL
```
http://localhost:8081/api/report/{reportID}/edit
```
:::

## Parameters
### Path Parameters

| Parameter                  | Value | Description | Example |
| -------------------------- | ----- | ----------- | ------- |
| **reportID**<br>_required_ | `int` |             | `4`     |

### Post Parameters

| Parameter      | Value    | Description           | Example                     |
| -------------- | -------- | --------------------- | --------------------------- |
| **reason**     | `string` | Reason for reporting  | `Violation Of Black Colors` |
| **resolution** | `string` | The result of report. |                             |

## Authorizations
Requires Moderator or Admin role.

## Responses
### 200
Expected response to a valid request.

```json
"Edited case ..."
```

### 401
Expected response when caller is not logged in.

```json
"Unauthorized"
```

### 404
Expected response when report with the ID not found.

```json
"No report found"
```

### 500
Expected response when assignment failed.

```json
"Failed to edit case"
```
