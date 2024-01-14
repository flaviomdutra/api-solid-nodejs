# Application of SOLID Principles

## Project Description

This project is developed with the purpose of exploring and applying SOLID principles in software design. SOLID is an acronym that represents five principles of object-oriented design aimed at improving code modularity and maintainability.

### SOLID Principles

**S - Single Responsibility Principle (SRP):**
   - A class should have only one reason to change, meaning it should have only one responsibility.

**O - Open/Closed Principle (OCP):**
   - A class should be open for extension but closed for modification. New features should be added without altering existing code.

**L - Liskov Substitution Principle (LSP):**
   - Subtypes must be substitutable for their base types without altering the correctness of the program. This means that objects of a base class should be able to be replaced by objects of its derived classes without affecting program integrity.

**I - Interface Segregation Principle (ISP):**
   - A class should not be forced to implement interfaces it does not use. Interfaces should be specific to the needs of the class.

**D - Dependency Inversion Principle (DIP):**
   - High-level modules should not depend on low-level modules. Both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions.

## Setup

Follow these steps to set up the project:

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:flaviomdutra/api-solid-nodejs.git
   ```
2. **Install Dependencies:** We are using PNPM for package management. If you haven't installed it yet, you can do so with `npm install -g pnpm`. After that, you can install the dependencies with:
   ```bash
   pnpm install
   ```
3. **Database Configuration:** We are using Docker to run the PostgreSQL database. Make sure you have Docker installed and running on your machine. To start the database, run the following command:
    ```bash
    docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
    ```
    Next, create a `.env` file at the root of the project with the following environment variables:

    ```bash
    NODE_ENV=dev
    DATABASE_URL="postgresql://docker:docker@localhost:5432/apisolid?schema=public"
    ```
4. **Project Scripts:** The project includes the following scripts:

    - `start:dev`: Starts the server in development mode.
    - `start`: Starts the server in production mode.
    - `build`: Compiles the TypeScript code to JavaScript.
    - `test`: Runs the project tests.
    - `test:watch`: Runs the project tests in watch mode.

    To start the server in development mode, run:
    ```bash 
    pnpm run start:dev
    ```

## Applicability

The SOLID principles are applicable in software projects to enhance flexibility, maintainability, and scalability of the code. They are particularly useful in large systems where complexity can become a challenge. By adopting these principles, it's possible to create more robust and less error-prone code.

## When to Use

- **Large Scale Projects**: In extensive projects where maintenance and scalability are critical, applying SOLID principles can facilitate code management.

- **Collaborative Development**: In teams with multiple members, adherence to SOLID principles can make collaboration more efficient as the code becomes more predictable and easier to understand.

- **Frequent Changes**: When there is a need to add new features regularly, SOLID principles can help avoid extensive changes to existing code.

## When Not to Use

- **Small and Simple Projects**: In small projects, strictly applying SOLID principles may be excessive and unnecessary, increasing complexity without proportional benefits.

- **Tight Deadlines**: In situations where time is crucial and rapid delivery is a priority, strictly following all SOLID principles may consume more time than necessary.

- **Limited Team Knowledge**: If the development team is not familiar with SOLID principles, incorrect application may lead to undesired results.