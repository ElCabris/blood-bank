# Style Guidelines

## Python Backend (FastAPI)

### Code Style
- Follow [PEP 8](https://peps.python.org/pep-0008/) as the base style guide.
  - Use 4 spaces for indentation (no tabs).
  - Limit all lines to a maximum of 79 characters.
  - Use type hints wherever possible to make your code more readable and easier to debug.
  
- Use **snake_case** for variables and function names, **PascalCase** for class names, and **UPPER_CASE** for constants.
  
#### Example:
```python
def get_user(user_id: int) -> User:
    # Implementation
    pass
```

- Organize your imports into three sections:
  1. Standard library imports.
  2. Related third-party imports.
  3. Local application imports.

#### Example:
```python
import os
import sys

from fastapi import FastAPI, Depends

from .models import User, Product
```

### Linting
- We are using **Pylint** for linting. Ensure your code passes the checks by running:
  ```bash
  pylint your_module.py
  ```

- If needed, you can generate a `.pylintrc` file with the following command:
  ```bash
  pylint --generate-rcfile > .pylintrc
  ```

- Disable rules or adjust configuration directly in the `.pylintrc` file. For instance, you can adjust line length:
  ```
  [FORMAT]
  max-line-length=79
  ```

### Testing
- Use **pytest** for testing.
- Follow the convention of naming your test files as `test_<module_name>.py`.
- Ensure your tests cover all major functionalities and edge cases.
- Run tests locally using:
  ```bash
  pytest
  ```

---

## JavaScript/TypeScript Frontend (React)

### Code Style
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- Use **ES6+** features such as `let`, `const`, and arrow functions.
- Use **camelCase** for variables and functions, **PascalCase** for React component names, and **UPPER_CASE** for constants.
  
#### Example:
```javascript
const userName = "John Doe";

function fetchUserData(userId) {
  // Implementation
}
```

- Keep your components small and focused. A single component should ideally do one thing.

#### React Component Example:
```jsx
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

### Linting
- Use **ESLint** with the Airbnb configuration for linting your JavaScript and TypeScript files.
- Install ESLint with Airbnb configuration:
  ```bash
  npx install-peerdeps --dev eslint-config-airbnb
  ```

- To lint your code, run:
  ```bash
  npx eslint .
  ```

- Ensure your configuration is set up in `.eslintrc.json`:
  ```json
  {
    "extends": ["airbnb", "airbnb/hooks"],
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module"
    }
  }
  ```

### Testing
- Use **Jest** with **React Testing Library** for testing React components.
- Ensure all components have unit tests that cover major functionality and edge cases.
  
#### Example:
```javascript
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders user profile with name and email', () => {
  const user = { name: 'John Doe', email: 'john@example.com' };
  render(<UserProfile user={user} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
});
```

- Run tests with:
  ```bash
  npm test
  ```

---

### Conclusion
By following these guidelines, we ensure consistency and maintainability in our codebase for both backend (FastAPI) and frontend (React). Please make sure to adhere to the coding standards and testing requirements as outlined above.

