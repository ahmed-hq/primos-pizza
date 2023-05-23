const createTabs = () => {
  const homeTab = document.createElement('div')
  const menuTab = document.createElement('div')
  const contactTab = document.createElement('div')
  
  homeTab.setAttribute('class', 'tab');
  menuTab.setAttribute('class', 'tab');
  contactTab.setAttribute('class', 'tab');

  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact';

  content.appendChild(homeTab);
  content.appendChild(menuTab);
  content.appendChild(contactTab);
}

export default createTabs;