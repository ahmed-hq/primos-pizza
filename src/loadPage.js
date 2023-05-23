import createHomePage from './home'
import createTabs from './tabs';

function loadPage(){
  
  createTabs();
  createHomePage();

}

export default loadPage;