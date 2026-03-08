---
prev:
  text: Reports
  link: '/atheja/api/reports'
next: false
---

# Assign Moderator to a Report

## Overview {hidden}

::: details `POST` /report/[reportID]/assign
Full URL
```
http://localhost:8081/api/report/{reportID}/assign
```
:::

## Parameters
### Path Parameters

| Parameter                  | Value | Description | Example |
| -------------------------- | ----- | ----------- | ------- |
| **reportID**<br>_required_ | `int` |             | `4`     |

### Post Parameters

| Parameter                  | Value    | Description                | Example  |
| -------------------------- | -------- | -------------------------- | -------- |
| **username**<br>_required_ | `string` | To whom assign the report? | `krmeni` |

## Authorizations
Requires Moderator or Admin role.

## Responses
### 200
Expected response to a valid request.

```json
"... assigned to case ..."
```
### 401
Expected response when caller is not logged in.

```json
"Unauthorized"
```

Expected response when trying to assign report to user without moderator role.

```json
"Cannot assign this user"
```

### 404
Expected response when report with the ID not found.

```json
"No report found"
```

Expected response when user with the username not found.

```json
"User not found"
```

### 500
Expected response when assignment failed.

```json
"Failed to assign resolver"
```

# Bulk Assign Moderator to a Report

## Overview {hidden}

::: details `POST` /report/[reportID]/assign
Full URL
```
http://localhost:8081/api/report/{reportID}/assign
```
:::

## Parameters
### Post Parameters

| Parameter                  | Value    | Description                  | Example  |
| -------------------------- | -------- | ---------------------------- | -------- |
| **username**<br>_required_ | `string` | To whom assign the report?   | `krmeni` |
| **reports**<br>_required_  | `int`    | List of IDs separated by `;` | `1;3;`   |

## Authorizations
Requires Moderator or Admin role.

## Responses
### 200
Expected response to a valid request.

```json
"... assigned to cases ..."
```
### 401
Expected response when caller is not logged in.

```json
"Unauthorized"
```

Expected response when trying to assign report to user without moderator role.

```json
"Cannot assign this user"
```

### 404
Expected response when report with the ID not found.

```json
"No report ... found"
```

Expected response when user with the username not found.

```json
"User not found"
```

### 500
Expected response when assignment failed.

```json
"Failed to assign resolver on case"
```
