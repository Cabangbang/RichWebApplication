//array of images
let AmongusImages = [
  "https://1000merken.com/wp-content/uploads/2021/08/Among-Us-Logo.png",
  "https://steamuserimages-a.akamaihd.net/ugc/1690522341905398802/3E1BB499FC8E46925E5C9F2A7F3164882029932F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  "https://media.tenor.com/gQV5VzHLWQIAAAAC/among-us-sus.gif",
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * AmongusImages.length);
  imgs[i].src = AmongusImages[randomImg];
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++) {
  headers[i].innerText = "AMONG US";
}

const headers3 = document.getElementsByTagName("h3");
for (let i = 0; i < headers3.length; i++) {
  headers3[i].innerText = "SUS";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].innerText = "SUSSY BAKA SUSSY BAKA";
  p[i].style.textDecoration = "underline";
  p[i].style.fontSize = "20px";
}

document.body.style.backgroundColor = "Pink";
