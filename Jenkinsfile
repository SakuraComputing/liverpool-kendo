pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
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
                sh 'git push heroku master'
            }
        }
    }
}
