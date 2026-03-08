---
prev:
  text: Reports
  link: '/atheja/api/reports'
next: false
---

# Mark Report as Solved

## Overview {hidden}

::: details `POST` /report/[reportID]/resolve
Full URL
```
http://localhost:8081/api/report/{reportID}/resolve
```
:::

## Parameters
### Path Parameters

| Parameter                  | Value | Description | Example |
| -------------------------- | ----- | ----------- | ------- |
| **reportID**<br>_required_ | `int` |             | `4`     |

### Post Parameters

| Parameter      | Value    | Description           | Example |
| -------------- | -------- | --------------------- | ------- |
| **state**      | `int`    | Is report resolved?   | `1`     |
| **resolution** | `string` | The result of report. |         |

## Authorizations
Requires Moderator to be assigned or Admin role.

## Responses
### 200
Expected response to a valid request.

```json
"... changed to state ..."
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

### 406
Expected response when no result is provided.

```json
"Missing resolution text"
```

### 500
Expected response when assignment failed.

```json
"Failed to change state"
```

# Bulk Mark Report as Solved

## Overview {hidden}

::: details `POST` /report/resolve
Full URL
```
http://localhost:8081/api/report/resolve
```
:::

## Parameters
### Post Parameters

| Parameter                 | Value    | Description                  | Example |
| ------------------------- | -------- | ---------------------------- | ------- |
| **state**                 | `int`    | Is report resolved?          | `1`     |
| **resolution**            | `string` | The result of report.        |         |
| **reports**<br>_required_ | `int`    | List of IDs separated by `;` | `1;3;`  |

## Authorizations
Requires Moderator to be assigned or Admin role.

## Responses
### 200
Expected response to a valid request.

```json
"... changed to state ..."
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

### 406
Expected response when no result is provided.

```json
"Missing resolution text"
```

### 500
Expected response when assignment failed.

```json
"Failed to change state on case ..."
```
