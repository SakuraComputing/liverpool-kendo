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
                sh 'git remote rm heroku'
                sh 'git remote add heroku git@git.heroku.com/liverpool-kendo-club.git'
                sh 'git push --force heroku HEAD:master'
            }
        }
    }
}
