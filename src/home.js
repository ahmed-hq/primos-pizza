const createHomePage = () => {

  const image = document.createElement('img');
  image.src = '../src/images/inside-store.jpg';
  image.height = '300';
  content.appendChild(image);

  const header = document.createElement('h1');
  header.textContent = "Welcome Primo's Pizza"
  content.appendChild(header)

  const bio = document.createElement('p');
  bio.textContent = 'This is the best pizza in Egypt';
  content.appendChild(bio);

}

export default createHomePage;