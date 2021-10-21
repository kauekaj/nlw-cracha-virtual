const LinksSocialMedia = {
    github: 'kauekaj',
    youtube: 'kauekaj',
    facebook: 'kauekaj',
    instagram: 'kauekaj',
    twitter: 'kauekaj'
  }
  
  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      social =li.getAttribute('class')
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` 
    }
  }

  changeSocialMediaLinks()