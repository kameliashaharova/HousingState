## Getting Started

1. `cd` into the `frontend/` folder
2. run `npm install` to install everything in package-lock.json

## Formatting

ESLint can be used to properly format code. The following command will attempt to fix any formatting issues in the current directory. Please run this before committing.
`npx eslint "**/*.js" --ignore-pattern dist/ --fix`

### Testing

**Development:** `npm start`

**Production:** `npm run build`

- Note- webpack will create a `dist` folder with prouction ready code. This folder is ignored by git.
