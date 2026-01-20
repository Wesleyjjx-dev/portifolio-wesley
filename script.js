// ===== GitHub API =====
const username = 'wesleyjjx-dev'

fetch(`https://api.github.com/users/${username}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('avatar').src = data.avatar_url
    document.getElementById('bio').textContent = data.bio || 'Bio não informada'
    document.getElementById('followers').textContent = data.followers
    document.getElementById('location').textContent = data.location || 'Não informado'
    document.getElementById('repos').textContent = data.public_repos
  })

// ===== Dark Mode =====
const toggleBtn = document.getElementById('themeToggle')

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  )
})

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark')
}

