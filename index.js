const d = document,
$fragment = d.createDocumentFragment(),
$main = d.querySelector('main');

fetch('https://reqres.in/api/users?per_page=12')
  .then(response => response.json())
  .then(data => {
    data.data.forEach(user => {
      const $userCard = d.createElement('card'),
        $userAvatar = d.createElement('img'),
        $userName = d.createElement('h3'),
        $userEmail = d.createElement('p')
        $userCard.classList.add('cardContent', 'col-3')
        $userAvatar.setAttribute("src", user.avatar);
        $userName.innerHTML = `${user.first_name} ${user.last_name}`
        $userEmail.innerHTML = user.email
        $userCard.appendChild($userAvatar)
        $userCard.appendChild($userName)
        $userCard.appendChild($userEmail)
        $fragment.appendChild($userCard)
      })
      $main.appendChild($fragment)
  });


