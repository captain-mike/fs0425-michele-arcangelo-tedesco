# Project Structure

This file maintains an up-to-date list of project files and structure.

## File Structure

- 📁 `.vscode/`
  - 📄 `.vscode\project-structure.md` (Markdown)
- 📁 `didupdate/`
  - 📁 `didupdate\.vscode/`
    - 📄 `didupdate\.vscode\project-structure.md` (Markdown)
  - 📁 `didupdate\public/`
    - 📄 `didupdate\public\vite.svg` (Unknown)
  - 📁 `didupdate\src/`
    - 📁 `didupdate\src\assets/`
      - 📄 `didupdate\src\assets\react.svg` (Unknown)
    - 📁 `didupdate\src\components/`
      - 📄 `didupdate\src\components\ChildComponent.jsx` (React)
        - *Imports:* `react`
        - *Exports:* `ChildComponent`
    - 📄 `didupdate\src\App.css` (CSS)
    - 📄 `didupdate\src\App.jsx` (React)
      - *Imports:* `react`, `./components/ChildComponent`, `./App.css`
    - 📄 `didupdate\src\index.css` (CSS)
    - 📄 `didupdate\src\main.jsx` (React)
      - *Imports:* `react`, `react-dom/client`, `./index.css`, `./App.jsx`
  - 📄 `didupdate\.gitignore` (Unknown)
  - 📄 `didupdate\eslint.config.js` (JavaScript)
    - *Imports:* `@eslint/js`, `globals`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint/config`
  - 📄 `didupdate\index.html` (HTML)
  - 📄 `didupdate\package-lock.json` (JSON)
  - 📄 `didupdate\package.json` (JSON)
  - 📄 `didupdate\README.md` (Markdown)
  - 📄 `didupdate\vite.config.js` (JavaScript)
    - *Imports:* `vite`, `@vitejs/plugin-react`
- 📁 `elevare-stato/`
  - 📁 `elevare-stato\.vscode/`
    - 📄 `elevare-stato\.vscode\project-structure.md` (Markdown)
  - 📁 `elevare-stato\public/`
    - 📄 `elevare-stato\public\vite.svg` (Unknown)
  - 📁 `elevare-stato\src/`
    - 📁 `elevare-stato\src\assets/`
      - 📄 `elevare-stato\src\assets\react.svg` (Unknown)
    - 📁 `elevare-stato\src\components/`
      - 📄 `elevare-stato\src\components\CrudPizze.jsx` (React)
        - *Imports:* `react`, `react-bootstrap`, `./PizzaForm`, `./PizzaList`, `../data/pizzas.json`
        - *Exports:* `CrudPizze`
      - 📄 `elevare-stato\src\components\PizzaForm.jsx` (React)
        - *Imports:* `react`, `react-bootstrap`
        - *Exports:* `PizzaForm`
      - 📄 `elevare-stato\src\components\PizzaItem.jsx` (React)
        - *Imports:* `react`, `react-bootstrap`
        - *Exports:* `PizzaItem`
      - 📄 `elevare-stato\src\components\PizzaList.jsx` (React)
        - *Imports:* `react`, `react-bootstrap`, `./PizzaItem`
        - *Exports:* `PizzaList`
    - 📁 `elevare-stato\src\data/`
      - 📄 `elevare-stato\src\data\pizzas.json` (JSON)
    - 📄 `elevare-stato\src\App.css` (CSS)
    - 📄 `elevare-stato\src\App.jsx` (React)
      - *Imports:* `./App.css`, `./components/CrudPizze`, `react-bootstrap`
    - 📄 `elevare-stato\src\index.css` (CSS)
    - 📄 `elevare-stato\src\main.jsx` (React)
      - *Imports:* `react`, `react-dom/client`, `bootstrap/dist/css/bootstrap.min.css`, `./index.css`, `./App.jsx`
  - 📄 `elevare-stato\.gitignore` (Unknown)
  - 📄 `elevare-stato\eslint.config.js` (JavaScript)
    - *Imports:* `@eslint/js`, `globals`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint/config`
  - 📄 `elevare-stato\index.html` (HTML)
  - 📄 `elevare-stato\package-lock.json` (JSON)
  - 📄 `elevare-stato\package.json` (JSON)
  - 📄 `elevare-stato\README.md` (Markdown)
  - 📄 `elevare-stato\vite.config.js` (JavaScript)
    - *Imports:* `vite`, `@vitejs/plugin-react`

---
Last updated: 2025-10-06T11:16:44.330Z
