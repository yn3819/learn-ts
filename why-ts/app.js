// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function fetchUser(){
  return axios.get(url)
}
// 섹션1-3 코드 따라치다가 말았음
// console.log(fetchUser());
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */
/**
 * @returns {Promise<User>}
 */

fetchUser().then(function(response){
  response.u
});


function startApp() {
  // axios
  //   .get(url)
  fetchUser()
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
