# Sparkle Motion

## Description

**Sparkle Motion** is a Voice-Command Virtual Assistant that generates responses and stores results. This application allows you to interact with it using voice commands and get personalized answers.

## Installation

1. **Clone the Repository**

   To get started, clone the repository from GitHub:


2. **Install Required Dependencies**

To install the necessary dependencies, run the following command:

    npm install


3. **Run the Project**

To run the project in development mode, use the following command:

    npm run dev


## Configuration

Before running the application, configure the `.envEXAMPLE` file with your customized values and rename it to `.env`.

## Docker

4. **Run Docker Image for Frontend Development**

To start the Docker image in the frontend development environment, execute the following command:

docker run -d -p host:container sparklemotion


Make sure to replace `host` and `container` with the appropriate ports.

5. **Build the Container for Frontend Development**

If you need to build the container for frontend development, use the following command:

docker build -t sparklemotion .


6. **Build the Container for Frontend Production**

To build the container for the frontend production environment, use the following command:

docker build -t sparklemotion-frontend-prod Dockerfile.prod --no-cache .

Sparkle Motion accepts voice commands that you can use to interact with the virtual assistant. Here are some examples:

- "Hello Sparkle Motion, what's a pull request?"
- "Hello Sparkle Motion, what's a virtual machine?"

 **technology stack**

 - # REACT
 - # TYPESCRIPT
 - # DOCKER
 - # MUI
 - # i18n
 - # Vite


Trello:

https://trello.com/invite/b/HIrJl6PS/ATTI647476eef7eac60aa1bcf19965f3360f05F93B91/sparkle-motion-development

Documentation:

https://docs.google.com/document/d/1bOhD7KasEBNjBjhwUqsaexgq_sIZH1Orb7Zj5ScpcRE/edit?usp=sharing





