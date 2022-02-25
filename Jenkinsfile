pipeline{

	environment {
		DOCKERHUB_CREDENTIALS=credentials('docker-hub-webdemo')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				check scm
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t brianvo/blog-demo:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push brianvo/blog-demo:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
