Starship Mayflower
==================

A starship bridge simulator running in your browser.

Prerequisites
=============

Install npm.

Install via npm:
- bower
- pomelo

Install
=======

This project is build using node.js and the Pomelo game server framework. You need to install all dependencies by running the script

```
$ npm-install.sh
```
(or npm-install.bat) in you working copy. This will install grunt, grunt-cli, less and other dependencies.

The webserver uses bower for frontend dependencies. Run

```
$ cd web-server
$ bower install
```

The frontend uses LESS for generating CSS files. There is a grunt target for building the CSS file: Run

```
$ grunt less
```
to generate the CSS file.


You can look into the scripts-dir: the install.sh should do all for you.


Run server
==========

Start game-server server by:

```
$ cd ../game-server
$ pomelo start
```

Start in a new shell the web-server by:

```
$ cd web-server
$ node app
```

Open your browser and visit http://localhost:3001

HF
