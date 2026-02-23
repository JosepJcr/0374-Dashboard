# 0374-Dashboard
Github Repository ASIX Students, IT Project and Network Administration, Web Dashboard and implementation of resources and technology
This project consists of developing a Linux server monitoring system capable of:

Objective:
1. Collecting system information (CPU, RAM, Disk, Network, Processes).
2. Generating JSON files with the results of 1.
3. Transfer the data to a web server.
4. Display the information on a dynamic web dashboard with automatic updates.
5. If there are sudden changes in the server status (stress, service failure, error chain), send an email notification.

Operation:
The system is divided into two parts:
A) Monitoring server (Ubuntu Server) (Srv Josep 0374)
B) Apache && Nginx web server (Ubuntu Server) (Srv Izan 0375)

1. Bash scripts generate system data in JSON format.
2. Cron automates periodic execution.
3. Files are synchronized to the web server using rsync.
4. Apache serves the dashboard.
5. JavaScript automatically updates the data every 6 minutes, which is what server A) needs to send the information.
6. Alert system with email services.

Some of the technologies used: 
Bash Scripting
Cron
rsync
Apache
HTML / CSS / JS

Translated with DeepL.com (free version)
