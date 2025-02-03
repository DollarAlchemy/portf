document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const contentArea = document.getElementById("content-area");
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }

    // Toggle Dark Mode
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Dynamic Content Loading with Fade-in Animation
    const contentData = {
        "about": "<h2>About Me</h2><p>Natural leader with 3+ years in administration, HR, and game development.</p>",
        "resume": "<h2>Resume</h2><a href='assets/pdfs/blank.txt' class='btn' download>Download Resume</a><div><h3>Experience</h3><p><strong>Deputy Court Clerk Supervisor</strong> - Fulton County, GA (2021-2022)</p><p>Managed confidential records and improved workflow efficiency.</p><h3>Education</h3><p>B.A. Political Science - Georgia State University (2019)</p></div>",
        "projects": "<h2>Projects</h2><p>Project 1: Game Mechanic Design</p><p>Project 2: Community Building</p>",
        "testimonials": "<h2>Testimonials</h2><p>'Thomas is a fantastic leader and team player.'</p>",
        "contact": "<h2>Contact</h2><p>Email: <a href='mailto:thomasjgiardino@gmail.com'>thomasjgiardino@gmail.com</a></p><p>GitHub: <a href='https://github.com/dollaralchemy'>github.com/dollaralchemy</a></p>"
    };
    
    function loadContent(section) {
        contentArea.style.opacity = "0";
        setTimeout(() => {
            contentArea.innerHTML = contentData[section] || "<h2>Content Not Found</h2>";
            contentArea.style.opacity = "1";
        }, 300);
    }
    
    sidebarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const section = link.getAttribute("href").replace("#", "");
            loadContent(section);
        });
    });
});
