# Fordest Website

Welcome to the Fordest Website repository! This guide will help you get started with the project and understand the contribution process.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 )
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   https://github.com/fordest-technology/fordest-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fordest-website
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Scripts

### Here are some useful npm scripts for development:

- Start Development Server

```bash
  npm run dev
```

- Build:

```bash
    npm run build
```

- Lint the Code:

```bash
    npm run lint
```

- Fix Lint Issues:

```bash
    npm run lint:fix
```

- Lint and Check for Fixable Issues:

```bash
    npm run lint:fix-m
```

- Lint and Show Messages

```bash
    npm run lint:m
```

## Contributing

### Pull Request Guidelines

When creating a pull request (PR), please adhere to the following guidelines:

1. **Branch Naming**

   Use the following format for branch names:

   - `feature/short-description` for new features
   - `UI/short-description` for new ui
   - `bugfix/short-description` for bug fixes
   - `chore/short-description` for maintenance tasks or non-functional changes

   Example:

   - `feature/add-user-authentication`
   - `bugfix/fix-login-issue`
   - `chore/update-dependencies`

2. **Commit Messages**

   Use clear and concise commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```plaintext
   type(scope): description

   [optional body]

   [optional footer]
   Example :

   feat(auth): add Google authentication integration

    Implement Google OAuth for user authentication.

    Pull Request Title
```

# Pull Request Title

The PR title should be descriptive and follow the format:

[type] short description of the change

**Example:**
[feat] add responsive design for mobile devices

**Post-Merge Actions**

After your PR is merged, make sure to perform the following steps:

- **Update the Main Branch**: Pull the latest changes into your local `main` branch.

```bash
  git checkout main
  git pull origin main
```

- **Delete the Feature Branch**: Delete the feature branch locally if it is no longer needed.

```bash
  git branch -d feature/branch-name
```

Keeping your branches up-to-date and cleaning up after merges helps maintain a clean and organized repository.

### Summary

```

Added responsive design for mobile devices to improve user experience.

```
