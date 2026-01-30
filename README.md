🎬 Movie Collection Web App
-----------------------------------------------------------------------------
📋 Project Overview
This web application is a dynamic movie library developed for the Week 2 Task. It features a responsive grid of movie cards and a functional genre-based filtering system. The project highlights the integration of vanilla JavaScript with a JSON data source and a collaborative Git workflow.
-----------------------------------------------------------------------------
🛠️ Project Setup
To run this project locally, follow these steps:

Clone the repository: git clone https://github.com/Kelvin-Ofili/movie-collection.git

Navigate to the directory: cd movie-collection

Switch to the development branch: git checkout development

Launch the App: Open index.html using the Live Server extension in VS Code to ensure the JavaScript fetch() API works correctly without CORS errors.
-----------------------------------------------------------------------------
💻 Available CLI Commands Used
The project structure and version control were managed entirely through the Command Line Interface (CLI):

mkdir: Created the directory structure including css, js, assets, images, and js/data.

touch: Created essential files like index.html, css/style.css, js/app.js, and js/data/movies.json.

git init: Initialized the local repository.

git checkout -b: Created separate branches for feature implementation.

git add . & git commit: Staged and saved progress with descriptive messages.

git push: Uploaded branches to the remote GitHub repository.
-----------------------------------------------------------------------------
🚀 Git Workflow Steps
We utilized a professional branching strategy to manage collaboration:

Main Branch: Reserved for the final, production-ready submission.

Development Branch: Used as the primary integration branch for all features.

Feature Branches: Individual tasks (e.g., feature/js-logic, feature/documentation) were developed in isolation.

Pull Requests (PRs): All changes were reviewed and merged through GitHub to ensure code quality.
-----------------------------------------------------------------------------
 Feature List & Implementation Details
Dynamic Card Rendering: JavaScript is used to fetch movie data from a JSON file and inject it into the DOM.

CSS Grid Layout: A responsive grid system was implemented to organize movie cards efficiently across all device sizes.

Genre Filtering: Users can filter the collection by clicking genre buttons, which triggers a JavaScript filter function.

Movie Metadata: Each card displays the Title, Release Year, Genre, and a Short Description.
-----------------------------------------------------------------------------
👥 Team Member Contributions
Student 1: Responsible for the repository setup, HTML structure, basic CSS styling, and the movies.json structure.

Student 2 (Me): Focused on the JavaScript logic, including the fetch() API implementation, dynamic card rendering, and genre filtering.
-----------------------------------------------------------------------------
🧠 Lessons Learned from Collaboration
Branch Management: We learned that working on separate feature branches prevents code conflicts and keeps the project organized.

Code Review Participation: Reviewing Pull Requests helped us maintain consistency and catch technical errors before final merging.

CLI Efficiency: Using CLI commands for file management and Git operations proved much faster than using a Graphical User Interface (GUI).
