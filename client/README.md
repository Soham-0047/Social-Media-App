# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Redux concept

- Redux does in a very general sense, is that it creates a global state for the whole application, that can be accessed by any of your component
- It is a state management library
You have only one state for your whole app, and not states for each of your components

As it is stated in the Error message you have to "fetch first." This worked for me. Use the command:

git fetch origin master
Then follow these steps to merge:

git pull origin master
git add .
git commit -m 'your commit message'
git push origin master