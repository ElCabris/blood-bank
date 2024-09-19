# Folder Structure

The project was restructured to separate concerns and improve maintainability. Below is a breakdown of the new folder structure:

- `backend/`: Contains the FastAPI application. It's dividen into logical parts:
    - `api/`: Routes for the API
    - `core/`: Core configurations such as settings and security.
    - `db/`: Database configuration and ORM models.
    - `schemas/`: Pydantic models used for validation.
    - `services/`: Business logic for different modules.
- `frontend/`: Contains the React application. This includes the `src/` folder for components and `public/` for static assets.
