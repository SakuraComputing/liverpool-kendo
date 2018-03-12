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
                sh 'echo yarn test -u'
            }
        }
    }
}
