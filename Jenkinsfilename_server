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
                input message: 'Do you wish to deploy to heroku? (Click "Proceed" to continue)'
                sh 'deploy'
            }
        }
    }
}
