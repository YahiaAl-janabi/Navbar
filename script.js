const barsIcon = document.querySelector('.bars');
const barsIconActive = document.querySelector('.bars-active');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

window.addEventListener('DOMContentLoaded', function () {
  navToggle.children[0].classList.remove('bars');
});

navToggle.addEventListener('click', function (e) {
  const toggleChild = e.currentTarget.children[0];

  toggleChild.classList.toggle('bars');

  if (toggleChild.classList.contains('bars')) {
    links.style.height = '276px';
    links.style.marginTop = '50px';
  } else {
    links.style.height = '0px';
    links.style.marginTop = '0px';
  }
});
