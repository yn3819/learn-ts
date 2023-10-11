// api url
var url = 'https://jsonplaceholder.typicode.com/users/';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerHTML = user[0].email;
      // 그냥 문자열이 아니라 객체였음(키:밸류 값)
      address.innerHTML = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
