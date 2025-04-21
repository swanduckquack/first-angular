# First Angular Project

A simple Angular application featuring todo management, profile editing, and a counter component. Built with Angular 19.2.

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v18.x or higher)
- npm (v9.x or higher)
- Angular CLI (v19.2.x)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/swanduckquack/first-angular.git
cd first-angular
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to:
```
http://localhost:4200
```

## Features

- **Todo Management**: Create and manage todo items with filtering capabilities
- **Profile Page**: Editable user profile with Material UI components
- **Counter**: Interactive counter component with basic operations
- **Responsive Layout**: Mobile-friendly design with Material theming

## Available Commands

- Run development server:
```bash
npm start
```

- Build for production:
```bash
npm run build
```

- Run unit tests:
```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── components/    # Reusable components
│   ├── services/      # API service
│   ├── pipes/         # Custom pipes
│   ├── directives/    # Custom directives
│   └── model/         # Type definitions
├── assets/           # Static assets
└── styles.scss       # Global styles
```

## Technologies Used

- Angular 19.2
- Angular Material
- RxJS
- TypeScript
- SCSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is unlicensed and available for learning purposes.