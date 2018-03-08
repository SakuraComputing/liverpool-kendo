pipeline {
    agent any

    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'yarn test -u'
            }
        }
        stage('Deliver') {
            steps {
                sh 'ls -latr'
                sh 'heroku git:remote -a liverpool-kendo-club'
                sh 'git remote add heroku git@heroku.com:liverpool-kendo-club.git'
                sh 'git push --force heroku master'
            }
        }
    }
}
