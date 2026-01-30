# Movie Collection Web App

## Project Overview

The **Movie Collection Web App** is a dynamic movie library built as part of the **Week 2 Task**. The application displays a responsive grid of movie cards and includes a genre-based filtering system.

The project’s main objective was to demonstrate **professional Git collaboration practices** alongside **vanilla JavaScript DOM manipulation**.

---

## Project Setup

Follow the steps below to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Kelvin-Ofili/movie-collection.git
   ```

2. **Navigate into the project directory**

   ```bash
   cd movie-collection
   ```

3. **Switch to the development branch**

   ```bash
   git checkout development
   ```

4. **Launch the application**

   Open `index.html` using the **Live Server** extension in VS Code.
   This ensures the JavaScript `fetch()` API works correctly without CORS issues.

---

## CLI Commands Used

The entire project setup and version control were handled using the **Command Line Interface (CLI)**:

* `mkdir` – Created project directories such as `css`, `js`, `assets`, `images`, and `js/data`
* `touch` – Created core files:

  * `index.html`
  * `css/style.css`
  * `js/app.js`
  * `js/data/movies.json`
* `git init` – Initialized the local Git repository
* `git checkout -b` – Created feature branches for isolated development
* `git add .` & `git commit` – Tracked and saved progress with clear commit messages
* `git push` – Pushed branches to the remote GitHub repository

---

## Git Workflow

A structured Git workflow was used to support collaboration and maintain code quality:

* **Main Branch**
  Contains the final, production-ready version of the project

* **Development Branch**
  Acts as the integration branch for all features

* **Feature Branches**
  Used for individual tasks such as:

  * `feature/js-logic`
  * `feature/documentation`

* **Pull Requests (PRs)**
  All features were merged via GitHub PRs after review to ensure stability and consistency

---

## Features & Implementation Details

* **Dynamic Movie Card Rendering**
  JavaScript fetches movie data from a local JSON file and dynamically injects content into the DOM

* **Responsive CSS Grid Layout**
  A flexible grid layout ensures the movie cards adapt smoothly across screen sizes

* **Genre-Based Filtering**
  Users can filter movies by genre using interactive buttons powered by JavaScript logic

* **Movie Metadata Display**
  Each card includes:

  * Title
  * Release Year
  * Genre
  * Short Description

---

## Team Contributions

* **Kevin**

  * Repository setup
  * HTML structure
  * Base CSS styling
  * `movies.json` data structure

* **Fatihat**

  * JavaScript logic
  * `fetch()` API implementation
  * Dynamic card rendering
  * Genre filtering functionality

---

## Lessons Learned

* **Effective Branch Management**
  Developing features in isolated branches minimized conflicts and improved workflow clarity

* **Code Review Process**
  Pull Request reviews helped catch errors early and improved overall code quality

* **CLI Productivity**
  Using the CLI for file management and Git operations proved faster and more efficient than relying on a GUI
