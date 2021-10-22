const userSocialMedia = {
  github: 'aindadecarbono',
  instagram: 'aindadecarbono',
  twitter: 'copiacarbonica'
}

function changeSocialMedia() {
  //document.getElementById('userName').textContent = 'Nome'
  //userName.textContent = 'Nome' //em se tratando de Id, não é necessário chamar pelo document.getElement
  //a declaração de baixo é a mesma que a de cima

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}

changeSocialMedia()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      foto.src = data.avatar_url
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
