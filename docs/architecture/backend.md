- `app`: This is the main folder that contains all the applications logic. Inside it, the code is organized into differentt modules and services to maintain project scalability and clarity.

- `app/api`: This folder contains the **routers** of the application.

- `app/core`: This module contains the main configuration of the application, such as security settings, authentication, and global variables.

- `app/db`: This folder manages the connection to the database and related operations.

- `app/man.py`: This is the **entry point** of the application. Here, the FastAPI instance is creadted, and the routers and pplication configuration are initialized.

- `app/modules`: This directory contains **business modules** or specific functionalities. Each module can hvae its own logic, routes and services. You can divide the code based on the domanin of the applicatino (e.g., authenticatino, users, products, etc.).

- `app/schemas`: Here you define **Pydantic schemas** that structure the input and output data of the API. Schemas are used to validate user input and structure responses.

- `app/services`: The `services` folder contains the application's **busines logic** or **services**. Here you can define functions or classes that handle database interactions, calculations, or any other complex logic that doesn't belong in the controllers.
