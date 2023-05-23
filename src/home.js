const createHomePage = () => {
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const image = document.createElement('img');
  image.src = '../src/imgs/inside-store.jpg';
  image.height = '300';
  pageContent.appendChild(image);

  const header = document.createElement('h1');
  header.textContent = "Welcome Primo's Pizza"
  pageContent.appendChild(header)

  const bio = document.createElement('p');
  bio.textContent = 'This is the best pizza in Egypt';
  pageContent.appendChild(bio);

  content.appendChild(pageContent);


}

export default createHomePage;