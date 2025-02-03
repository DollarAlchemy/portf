document.addEventListener("DOMContentLoaded", () => {
    // Load projects from JSON
    fetch("data/projects.json")
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.querySelector(".project-list");
            data.projects.forEach(project => {
                let projectElement = document.createElement("div");
                projectElement.classList.add("project");
                projectElement.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
                projectContainer.appendChild(projectElement);
            });
        });
});
