Your schedules table will be composed of the following fields:

- a unique key (ID),
- a username,
- the day of the week (1 for Monday, 2 for Tuesday... 7 for Sunday),
- a start time
- and an end time (both TIME type).

Create a route "/" that will retrieve the list of existing schedules from the database and display them.

Create a route "/new" which will implement two actions:

- on GET, a form to add a schedule will be displayed.
- on POST, the form data will be saved in the database. You will then redirect to the form.

You need to implement two views:

- the view that displays all schedules, which will simply be presented as < USER NAME - day start_time - end_time > For example: < MAUD - Tuesday 8:30-12:30 >

* the view that displays the form.
  On each of your views, there will be a link to the other view.

In a folder named Project_03_First Name_Surname, you will make available to your tutor:

all the source files that make up your application.

# MYSQL shell commands

- link
  https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-commands.html

- connect to sql
  open mysql shell and type:

```sql
\sql
```

- connect to database

```sql
\connect root@loclhost:3306/mydbname
```

enter password

```sql
enter ur password
```

- show databases:

```sql
show database;
```

- use database

```sql
use yourdatabasename
```

- show tables:

```sql
show tables;
```

## DATABASE Commands

- create database

```sql
CREATE DATABASE databaseneme;
```

- delete database

```sql
DROP DATABASE databaseneme;
```

- date TIME

```sql
 select date_format(ArrivalDatetime,'%H:%i') as HourAndMinutes from DemoTable1527;
```

- show table details

```sql
DESCRIBE tablename
```
