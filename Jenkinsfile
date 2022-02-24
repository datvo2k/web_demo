pipeline {
    agent any
    stages {
        stage('Docker Build and Tag') {
            steps {
              
                sh 'docker build -t blog-demo:latest .' 
                sh 'docker tag blog-demo brainvo/blog-demo:latest'
                sh 'docker tag blog-demo brainvo/blog-demo:$BUILD_NUMBER'
               
            }
        }
     
    stage('Publish image to Docker Hub') {
        steps {
            withDockerRegistry([ credentialsId: "02bf2b58-6396-459e-a27e-809f4dbe9cb4", url: "" ]) {
                sh  'docker push brainvo/blog-demo:latest'
                sh  'docker push brainvo/blog-demo:$BUILD_NUMBER' 
            }
                  
        }
    }
}