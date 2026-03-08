---
prev:
  text: Reports
  link: '/atheja/api/reports'
next: false
---

# Unassign Moderator from a Report

## Overview {hidden}

::: details `POST` /report/[reportID]/unassign
Full URL
```
http://localhost:8081/api/report/{reportID}/unassign
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

```json
"... unassigned from case ..."
```

### 400
Expected response when can not unassing.

```json
"Can't unassign unassignable"
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
"Failed to assign resolver"
```
