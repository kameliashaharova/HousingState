## MySQL

### AWS Installation

Follow instructions in this [guide](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04)

### Usage

#### Loggin In

1. `systemctl status mysql.service` to ensure sql server is running. If not running then `sudo systemctl start mysql`
2. `mysql -u root -p` then enter password when prompted.
3. `exit` to return to command line

#### Running Scripts

After logging in: `mqsql> source <path to .sql file>`
