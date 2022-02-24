pipeline {
    agent any
    stages {
        stage('Docker Build and Tag') {
            steps {
              
                sh 'docker build -t webdemo:latest .' 
                sh 'docker tag webdemo brainvo/webdemo:latest'
                sh 'docker tag webdemo brainvo/webdemo:$BUILD_NUMBER'
               
            }
        }
     
    stage('Publish image to Docker Hub') {
        steps {
            withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
                sh  'docker push brainvo/webdemo:latest'
                sh  'docker push brainvo/webdemo:$BUILD_NUMBER' 
            }
                  
        }
    }
}