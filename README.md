# B3 Devops - TP 1
## Info
Mail : geoffrey.parrier@ynov.com

github_username : <a href='https://github.com/geoffreyparrier'>@geoffreyparrier</a>

professor : <a href='https://github.com/aegirops'>@aegirops</a>

### Libraires & Programs installed
```
NodeJS
Nginx
PostgreSQL
Redis
```

## Prerequisites
- <a href='https://www.docker.com/get-started'>Docker</a>
- <a href='https://git-scm.com/book/en/v2/Getting-Started-Installing-Git'>Git</a>
- A shell

## Installation / How to start
1. Clone this repository `https://github.com/YI-B3-Devops/tp2-parrier-geoffrey/`.
2. On the shell do `cd tp2-parrier-geoffrey/Dockerfile`
3. Execute `sudo docker-compose up` and wait for the end of the installation and configuration.
4. Your done ! The environment is up and running.

## Usage

### View nginx webpage
Go on <a href='http://localhost:3000'>http://localhost:3000</a>

### Stop the Virtual Machine
If you want to stop the virtual machine use `Ctrl+C`

## Uninstall
If you need to uninstall this docker use these commands :

1. delete all the image and container you have on your computer (use another if you need to keep some of your container or images)
    * `sudo docker rm $(sudo docker ps -aq) && sudo docker rmi $(sudo docker image ls)`
2. Delete the folder manually
