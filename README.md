# Liverpool Kendo Club

## Project written in React JS and Webpack

Check out the url below for it's live deployment 

https://liverpool-kendo.club.herokuapp.com

## Run Jenkins from a server

Choose the Jenkinsfilename_server rename this to Jenkinsfile and push and this will start a build


## Run Jenkins in docker

Choose the Jenkinsfilename_docker rename this to Jenkinsfile and push this to the repo

## Or

`docker run \
   --rm \
   -u root \
   -p 8090:8080 \
   -v jenkins-data:/var/jenkins_home \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v "$HOME":/home \
   jenkinsci/blueocean`
   
   Pull down the image. Connect to Jenkins via port 8090, add the administrator password and restart.
   
   Create a new pipeline, switch to Blue Ocean and the already configured Jenkinsfile will be run.

