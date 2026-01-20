const username = 'wesleyjjx-dev'

fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('avatar').src = data.avatar_url
    document.getElementById('bio').textContent =
      data.bio || 'Bio não informada'

    document.getElementById('followers').textContent = data.followers
    document.getElementById('location').textContent =
      data.location || 'Localização não informada'
    document.getElementById('repos').textContent = data.public_repos
  })
  .catch(() => {
    console.error('Erro ao carregar dados do GitHub')
  })
