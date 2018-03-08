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
                sh 'git commit -m "First commit"'
                sh 'git push --force heroku HEAD:master'
            }
        }
    }
}
