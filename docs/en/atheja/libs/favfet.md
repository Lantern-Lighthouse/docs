# FavFet

A lightweight PHP library for handling favicons.

## Installation

```bash
composer require lantern-lighthouse/favfet
```

## Usage

### Favicon Fetching

```php
use FavFet\FavFet;

// Get favicon as Base64 string
$encodedImage = FavFet::getFaviconAsBase64("https://github.com/Lantern-Lighthouse/");
```

## Requirements

- PHP 8.1 or higher

## License

GPL-3.0 License
