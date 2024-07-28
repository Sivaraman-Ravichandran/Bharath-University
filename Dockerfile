# Use a base image that includes Java and necessary dependencies
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the build artifact from the target directory into the Docker image
COPY target/message-0.0.1-SNAPSHOT.jar /app/app.jar

# Optionally, copy the application properties file
COPY src/main/resources/application.properties /app/src/main/resources/

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
