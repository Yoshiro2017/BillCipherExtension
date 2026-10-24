# BillCipherExtension

BillCipherExtension is a custom MediaWiki extension developed by **The All Seeing Eye**. It introduces a dynamic ringmaster to your wiki farm, allowing contributors to propose dimensional deals using a custom parser tag.

## Features

* **Custom Parser Tag (`<deal>`)**: Embed interactive deal-making blocks directly onto any wiki article.
* **Resource Modules**: Includes dedicated styling (`ext.billcipher.css`) and interactive scripts (`ext.billcipher.js`) loaded via ResourceLoader.
* **Internationalization**: Fully localized support strings using standard JSON message files.

## Requirements

* MediaWiki 1.35 or later
* PHP 7.4 or later

## Installation

1. Navigate to your MediaWiki extensions directory:
   ```text
   cd C:\miraheze\apache\wikis\main\w\extensions\
   ```

2. Clone or place the extension folder into a directory named `BillCipherExtension`:
   ```text
   C:\miraheze\apache\wikis\main\w\extensions\BillCipherExtension\
   ```

3. Add the following line to the bottom of your `LocalSettings.php` file:
   ```php
   wfLoadExtension( 'BillCipherExtension' );
   ```

4. Run maintenance scripts or clear your browser cache if necessary to register the new ResourceLoader modules.

## Usage

Once enabled, you can use the `<deal>` tag on any wikitext page:
```text
<deal>I offer complete control over this wiki sector in exchange for a permanent golden spot.</deal>
```

## License

This extension is open-source software licensed under the **MIT License**.
