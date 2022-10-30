function getUsers() {
  const name = document.getElementById("username").value;
  fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json().then((data) => {
      console.log(data);
      document.getElementById("name").innerHTML = "NAME: " + data.name;
      document.getElementById("login").innerHTML = "USERNAME: " + data.login;
      document.getElementById("email").innerHTML = "EMAIL: " + data.email;
      document.getElementById("location").innerHTML =
        "LOCATION: " + data.location;
      document.getElementById("gist").innerHTML =
        "NUMBER OF GISTS: " + data.public_gists;
      document.getElementById(
        "profilePicture"
      ).innerHTML = `<img src="${data.avatar_url}" />`;
      let repos = data.repos_url;
      document.getElementById("repos").innerHTML = repos.name;
    })
  );
}
