const barsIcon = document.querySelector('.bars');
const barsIconActive = document.querySelector('.bars-active');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (e) {
  const toggleChild = e.currentTarget.children[0];

  toggleChild.classList.toggle('bars');

  links.classList.toggle('links-active');
});
