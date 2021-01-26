fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=20&state=open&sort=created&direction=asc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
