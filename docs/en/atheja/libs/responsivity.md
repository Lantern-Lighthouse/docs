# Responsivity

A lightweight PHP library for handling HTTP responses, rendering templates, and managing configuration in Fat-Free Framework applications.

## Installation

```bash
composer require lantern-lighthouse/responsivity
```

## Usage

### JSON Responses

```php
use Responsivity\Responsivity;

// Simple success response
Responsivity::respond(['success' => true, 'data' => $data]);

// Error response
Responsivity::respond(
    ['error' => 'Not found'],
    Responsivity::HTTP_Not_Found
);

// Created response
Responsivity::respond(
    ['id' => 123, 'message' => 'Resource created'],
    Responsivity::HTTP_Created
);
```

### Template Rendering

```php
$f3 = \Base::instance();
Responsivity::render($f3, 'pages/home.html');
```

### Configuration Management

```php
$f3 = \Base::instance();
Responsivity::updateConfigValue($f3, 'database.host', 'localhost');
Responsivity::updateConfigValue($f3, 'app.debug', true);
```

## Requirements

- PHP 8.1 or higher
- Fat-Free Framework 3.8 or higher

## License

GPL-3.0 License
