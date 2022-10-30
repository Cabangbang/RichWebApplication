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

      for (let i = 0; i < data.public_repos; i++) {
        //!Deletes the repos
        document.getElementById("userRepos").innerHTML = " ";
      }

      getUsersRepos(data, name); //*Retrieves the repos to display
    })
  );
}

function getUsersRepos(user, name) {
  fetch(`https://api.github.com/users/${name}/repos`).then((response) =>
    response.json().then((data) => {
      console.log(data);
      for (let i = 0; i < user.public_repos; i++) {
        test = data[i];

        let repoName = document.createElement("h4");
        let repoDesc = document.createElement("h4");
        let repoDiv = document.createElement("div");

        repoDiv.id = "repoDiv " + i;
        repoName.innerHTML = "Name: " + data[i].name;
        repoDesc.innerHTML = "Description: " + data[i].description;

        document.getElementById("userRepos").appendChild(repoDiv); //*Creates a div and styles it
        repoDiv.setAttribute("style", "border: #CCCCCC 1px solid");
        document
          .getElementById("userRepos")
          .setAttribute("style", "overflow-x: auto");

        document.getElementById("repoDiv " + i).appendChild(repoName); //*Appends the name and descriptions to the created div
        document.getElementById("repoDiv " + i).appendChild(repoDesc);
      }
    })
  );
}
