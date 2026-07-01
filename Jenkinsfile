pipeline {

agent any

stages {

stage('Checkout') {
steps {
checkout scm
}
}

stage('Install Dependencies') {
steps {
bat 'npm ci'
}
}

stage('Install Playwright') {
steps {
bat 'npx playwright install'
}
}

stage('Run Tests') {
steps {
bat 'npx playwright test'
}
}

}

post {

success {
echo 'Build Success'
}

failure {
echo 'Build Failed'
}

always {
archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
}

}

}
