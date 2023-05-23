const createContact = () => {
  const contactWrapper = document.createElement('div');

  const contactHeading = document.createElement('h3');
  contactHeading.innerText = 'Contact Us'
  contactWrapper.appendChild(contactHeading);
  
  const form = document.createElement('form');
  form.classList.add('contact-form');
  contactWrapper.appendChild(form);


  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Name';
  form.appendChild(nameInput);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Email Address';
  form.appendChild(emailInput);

  const phoneInput = document.createElement('input');
  phoneInput.type = 'number';
  phoneInput.placeholder = 'Phone Number';
  form.appendChild(phoneInput);

  const messageInput = document.createElement('input');
  messageInput.type = 'text';
  messageInput.placeholder = 'Message';
  form.appendChild(messageInput);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerText = 'Contact';
  form.appendChild(submitBtn);

  content.appendChild(contactWrapper)

}

export default createContact;