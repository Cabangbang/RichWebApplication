async function GetPost() {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    let postTitles = posts.map((posts) => posts.title);
    let result = postTitles.filter(
      (postTitles) => postTitles.split(" ").length > 6
    );
    result.forEach((result) => console.log(result));
  } catch (e) {
    console.log(e);
  }
}

async function GetWordMap() {
  try {
    let Map = {};
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    let postBodies = posts.map((posts) => posts.body);
    postBodies.map((postBodies) =>
      postBodies
        .split(" ")
        .map((words) => words.replace("\\", " "))
        .map((words) => {
          if (Map.hasOwnProperty(words)) {
            Map[words]++;
          } else {
            Map[words] = 1;
          }
        })
    );
    let Frequency = Object.keys(Map);
    Frequency.forEach((freq) => console.log(freq + " >> " + Map[freq]));
  } catch (e) {
    console.log(e);
  }
}
