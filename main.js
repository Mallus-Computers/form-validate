const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs(){
  //get the values from the inputs
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === ''){
    //show error and error class
    setErrorFor(fname, 'Field cannot be empty!');
  }else {
    //show success class
    setSuccessFor(fname);
  }

  if(lnameValue === ''){
    setErrorFor(lname, 'Field cannot be empty!');
  }else {
    setSuccessFor(lname);
  }

  if(emailValue === ''){
    setErrorFor(email, 'Field cannot be empty!');
  }else {
    setSuccessFor(email);
  }
  if (passwordValue ===''){
    setErrorFor(password, 'Field cannot be empty!');
  }else{
    setSuccessFor(password);
  }
}

function setErrorFor(input, message){
  const formControl = input.parentElement; //.form-control div
  const small = formControl.querySelector('small') //add error message inside small tag
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
