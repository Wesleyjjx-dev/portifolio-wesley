// DARK MODE
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// GITHUB API
const username = "wesleyjjx-dev";

fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").textContent = data.name;
    document.getElementById("bio").textContent = data.bio || "Sem bio";
    document.getElementById("followers").textContent = data.followers;
    document.getElementById("following").textContent = data.following;
    document.getElementById("githubLink").href = data.html_url;
  });
