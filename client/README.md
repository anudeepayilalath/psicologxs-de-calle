# Frontend

1. Install Node.js.

2. In the command line run:

**node -v**

**npm install create-react-app**

**npx create-react-app psicologxs-de-calle**

**npm install bootstrap**
**npm install react-bootstrap bootstrap**

**npm install react-router-dom**

**npm start**

## GitHub pages https://joannawebdev.github.io/psicologxs-de-calle/

In the client folder, open a terminal:
**npm install gh-pages --save-dev**

In the package.json add
**"homepage": "https://joannawebdev.github.io/psicologxs-de-calle",**
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

Terminal cd

## Live demo on Netlify pending
**npm run build**
**npm install netlify-cli -g**
**netlify deploy**