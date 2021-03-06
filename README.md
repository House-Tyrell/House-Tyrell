# OctoPOS

> A customizable Point of Sales system that seamlessly integrates real-time sales interface, inventory tracking, and graphical sales data analysis. 

## Table of Contents
1. [Requirements](#requirements) 
1. [Installing Dependencies](#installing-dependencies)
1. [MySQL Database](#mysql-database)
1. [Style Guide](#style-guide)

## Getting Started

### Requirements
* Node.js
* React.js
* MySQL
* Sequelize
* Socket.io
* C3
* React-Table
* Cron

### Installing Dependencies
From within the root directory, run the following:
``` 
npm install -g webpack
npm install
```

### Steps
``` 
npm start
```
In a browser navigate to localhost:3000

### MySQL Database
The current MySQL database connection is configured with AWS RDS with a read only Replica database to elastically scale out beyond the capacity constraints of a single database.

## Style Guide
This codebase follows the AirBnB style guide incorporated using a linter. All submitted Pull Requests should also follow AirBnB's style guide.

Two examples for configuring your environment to adhere to this style guide can be found [here](http://www.acuriousanimal.com/2016/08/14/configuring-atom-with-eslint.html) for Atom and [here](https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6) for VSCode.
