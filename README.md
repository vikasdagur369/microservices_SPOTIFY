# Spotify Clone

##Live link : [BeatStream](http://13.61.33.115:3000/)

A scalable Spotify clone built with **Node.js**, **TypeScript**, and a **microservices architecture**. This project replicates core Spotify functionalities like music streaming, playlist management, user authentication, and song recommendations using a modular, distributed system.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Microservices](#microservices)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization (login, signup, JWT-based sessions)
- Music streaming and playback
- Playlist creation, editing, and deletion
- Search for songs, artists, and albums
- Song recommendations based on user preferences
- Scalable microservices architecture
- Real-time updates using message queues

## Architecture

The project uses a **microservices architecture** for scalability and maintainability. Each service is independent, communicates via APIs or message queues.



**Key Components:**

- **API Gateway**: Routes requests to appropriate microservices (e.g., using Express Gateway or Nginx).
- **Service Discovery**: Manages inter-service communication (e.g., Eureka or Consul).
- **Message Queue**: Handles asynchronous tasks (e.g., RabbitMQ or Kafka).
- **Databases**: Service-specific databases (e.g., MongoDB for users, PostgreSQL for music metadata).

## Technologies

- **Node.js**: Backend runtime environment
- **TypeScript**: Static typing for JavaScript
- **Express.js**: Web framework for APIs
- **Docker**: Containerization for microservices
- **Kubernetes**: Orchestration (optional, for production)
- **MongoDB**: NoSQL database for user data
- **PostgreSQL**: Relational database for music metadata
- **JWT**: Authentication and authorization
- **Jest**: Testing framework

## Microservices

The project is divided into the following microservices:

1. **Auth Service**: Handles user authentication and session management.
2. **User Service**: Manages user profiles and preferences.
3. **Music Service**: Manages song metadata and streaming.
4. **Playlist Service**: Handles playlist creation and management.
5. **Recommendation Service**: Generates song recommendations.
6. **Search Service**: Provides search functionality for songs, artists, and albums.

## Prerequisites

- **Node.js**: v16 or higher
- **TypeScript**: v4.5 or higher
- **Docker**: For containerization
- **Docker Compose**: For running multi-container setup
- **MongoDB**: Local or cloud instance
- **PostgreSQL**: Local or cloud instance
- **Git**: For version control

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vikasdagur369/microservices_SPOTIFY.git
   cd spotify-clone
   ```
