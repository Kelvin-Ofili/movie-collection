🎬 Movie Collection Web App
 Project Overview
This project is a dynamic web application developed as part of our Week 2 assignment. It serves as a personal cinema library that displays a grid of movies fetched from a local JSON data source. The primary objective was to demonstrate proficiency in vanilla JavaScript DOM manipulation and professional Git collaboration workflows.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Project Setup
To view the application locally, please follow these steps:

Clone the repository: git clone https://github.com/Kelvin-Ofili/movie-collection.git

Navigate to the directory: cd movie-collection

Switch to the development branch: git checkout development

Launch the Application: Open index.html using a local server (like the Live Server extension in VS Code) to ensure the fetch() request to the JSON file functions correctly without CORS restrictions.

 Available CLI Commands Used
In alignment with the technical requirements, the project structure was created entirely through the Command Line Interface (CLI):

mkdir — Used to generate the directory structure including css, js, assets, and js/data.

touch — Used to initialize the required files such as index.html, style.css, and movies.json.

git init — Used to initialize the local Git repository.

git checkout -b — Utilized for creating feature-specific branches to maintain code isolation.

git add . & git commit — Used for staging and saving incremental changes with descriptive commit messages.

Git Workflow Steps
We implemented a structured branching strategy to ensure collaboration was organized and professional:

Main Branch: Reserved for the final, stable version of the project.

Development Branch: Acted as the integration point where all individual features were merged.

Feature Branches: Each team member worked in a dedicated branch (e.g., feature/html-css or feature/js-logic) to avoid direct conflicts on the development branch.

Pull Requests (PRs): Changes were submitted via PRs on GitHub, allowing for peer review and testing before final merging.

Feature List & Implementation Details
Responsive Grid: Developed using CSS Grid to display movie cards across various device sizes.

Dynamic Content Rendering: Implemented JavaScript's fetch() API to pull data from a movies.json file.

Genre Filtering: Created a functional filtering system that updates the DOM based on user-selected genres using data attributes.

Movie Cards: Each card includes the title, release year, genre, and description as per the project requirements.

Team Member Contributions
Kevin: Responsible for the initial repository setup, HTML structure, core CSS styling, and the initial design of the movies.json data structure.

Fatihat: Focused on the JavaScript logic, specifically implementing the fetch() functionality, dynamic card rendering, and the genre filter logic.

 Lessons Learned from Collaboration
Version Control Benefits: Using branches significantly reduced the risk of merge conflicts and allowed us to work simultaneously on different parts of the code.

CLI Proficiency: Mastering CLI commands like mkdir and touch streamlined the project setup phase and provided a more efficient workflow compared to GUI methods.
