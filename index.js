// ============= Side menu
const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
const sideNav = document.querySelector('.side-nav');
const modal = document.querySelector('.modal');
const sideNavDropDowns = document.querySelectorAll('.side-nav__drop-down');
const toggleDropDownMenus = document.querySelectorAll('.toggle-drop-down');

console.log(toggleDropDownMenus);

function toggleMobileMenu() {
  sideNav.classList.toggle('hide');
  modal.classList.toggle('hide');
  sideNavDropDowns.forEach((el) => {
    !el.classList.contains('hideDropDown') && el.classList.add('hideDropDown');
  });
  toggleDropDownMenus.forEach((el) => {
    el.src = '/images/icon-arrow-down.svg';
  });
}

hamburger.addEventListener('click', toggleMobileMenu);
closeButton.addEventListener('click', toggleMobileMenu);

// ============= Dropdowns
function toggleDropDown(e) {
  let dropDown = document.createTreeWalker(e.target).currentNode.parentNode
    .nextElementSibling;
  dropDown.classList.toggle('hideDropDown');
  dropDown.classList.contains('hideDropDown')
    ? (e.target.src = '/images/icon-arrow-down.svg')
    : (e.target.src = '/images/icon-arrow-up.svg');
}

toggleDropDownMenus.forEach((el) =>
  el.addEventListener('click', toggleDropDown)
);
