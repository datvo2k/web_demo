pipeline {
  environment {
    imagename = "brianvo/blog-demo"
    registryCredential = 'docker-hub-webdemo'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
        checkout scm
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imagename
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest')
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $imagename:$BUILD_NUMBER"
         sh "docker rmi $imagename:latest"
 
      }
    }
  }
}