var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < 5; i++) {
        var userName = document.createElement("h3");
        var userURL = document.createElement("h4");
        userName.textContent = data[i].login;
        userURL.textContent = data[i].html_url;
        userContainer.appendChild(userName);
        userContainer.appendChild(userURL);
        console.log(userName);
        console.log(userURL);
      }

    });
}

// console.log(userName);
// console.log(userURL);

fetchButton.addEventListener('click', getApi);
