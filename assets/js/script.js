
document.addEventListener("DOMContentLoaded", function () {
  // Show 'About Me' content by default
  showContent("about");
});

function showContent(contentType) {
  // Sample content for each menu item; replace with your actual content
  const contentMap = {
    about: "about-content",
    career: "career-content",
    skills: "skills-content",
    projects: "projects-content",
    blogs: "blogs-content",
    contact: "contact-content",
  };

  // Hide all content sections
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active-content");
  });

  // Show the selected content section
  document
    .getElementById(contentMap[contentType])
    .classList.add("active-content");

  // Remove 'active' class from all links and add it to the clicked link
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => link.classList.remove("active"));
  document
    .querySelector(
      `.nav-link[href="javascript:void(0)"][onclick="showContent('${contentType}')"]`
    )
    .classList.add("active");
}
