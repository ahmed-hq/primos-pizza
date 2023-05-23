const createMenus = () => {

  const menusWrapper = document.createElement('div');
  menusWrapper.classList.add('menus-wrapper');

  const menusHeading = document.createElement('h3');
  menusHeading.innerText = 'Menus';
  menusWrapper.appendChild(menusHeading);

  const menuList = document.createElement('ul');
  menusWrapper.appendChild(menuList)

  const menuListOne = document.createElement('li');
  menuListOne.textContent = 'first menu'
  menuList.appendChild(menuListOne);
  const menuListTwo = document.createElement('li');
  menuListTwo.textContent = 'second menu'
  menuList.appendChild(menuListTwo);
  const menuListThree = document.createElement('li');
  menuListThree.textContent = 'third menu'
  menuList.appendChild(menuListThree);
  const menuListFour = document.createElement('li');
  menuListFour.textContent = 'fourth menu'
  menuList.appendChild(menuListFour);

  content.appendChild(menusWrapper)

}

export default createMenus;