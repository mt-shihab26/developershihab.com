---
title: 'WordPress Local Development Environment with Laravel Herd'
description: >-
    This guide shows how to create a fast, easy-to-use wordpress local development environment
    for plugin development.
date:
    publish: 30 September 2024
tags:
    - php
    - wordpress
    - laravel-herd
draft: true
---

## Prerequisites

First of all we have to install some tools like [WP-CLI](https://wp-cli.org), [Laravel Herd](https://herd.laravel.com) and [DBngin](https://dbngin.com).

We will use WP-CLI to configure our the wp-config.php file.
Also to setting up name, admin username, admin password, etc

Laravel Herd to configure [php-fpm](https://php-fpm.org), [nginx](https://nginx.org), [DNSMasq](https://dnsmasq.org).
This will also set up a test domain in the local system, such as example.test

DBngin allows us to spin up any [MySQL](https://www.mysql.com), [PostgreSQL](https://www.postgresql.org), or [Redis](https://redis.io) database with a user-friendly GUI.
We will use this to spin up a MySQL database instance to connect to our WordPress website.

If you find any difficulties to install go to [docs](https://wp-cli.org/#installing)

### 1. Install Laravel Herd

#### -> MacOS

To install laravel herd in MacOS, you can use [Homebrew](https://brew.sh) or download .dmg file from [official website](https://herd.laravel.com) and install it like other softwares you install.

If your are using Homebrew just run this command.

```sh
brew install --cask herd
```

#### -> Windows

To install laravel herd in Windows, just download the .exe file from [official website](https://herd.laravel.com/windows) and install just like other softwares

### 2. Install WP-CLI

To install WP-CLI, run these commands:

```sh
# To downloading the phar file
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
# Give wp-cli.phar executable permission
chmod +x wp-cli.phar
# Move the wp cli as wp to a path directory
sudo mv wp-cli.phar /usr/local/bin/wp

```
