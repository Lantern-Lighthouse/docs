# URLser

Functions useful for parsing URLs into tags.

## Installation

```bash
composer require lantern-lighthouse/urlser
```

## Usage

### Parsing URL to Domain and Subdomain

```php
use URLser\URLser;

foreach (array_map("strtolower", URLser::parse_domain("https://github.com/Lantern-Lighthouse/URLser")) as $tag)
{
	// ...
}
```

### Get Page Name

```php
$pgName = URLser::get_page_name("https://github.com/Lantern-Lighthouse/URLser"); // Set the value to "Lantern-Lighthouse/URLser"
```

## Requirements

- PHP 8.1 or higher

## License

GPL-3.0 License
