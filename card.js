let Post;
let currentPage = 1;
let postPerPage;
let indexOfFirstPost;
let indexOfLastPost;
let currentPosts;
let pageNumber = [];

//paginating work started 20/3/23
let forward = 1;
let backward = 1;
let currentPageNum;
let numPerLine;
let currentNumLine = 1;
function currPage() {
  numPerLine = 5;
  indexOfLastNum = currentNumLine * numPerLine;
  indexOfFirstNum = indexOfLastNum - numPerLine;
  currentNumLine = pageNumber.slice(indexOfFirstNum, indexOfLastNum);
}
//paginating work started 20/3/23

//fetch data
async function jsonfile() {
  Post = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

// pagination functioning.....
function paginating() {
  postPerPage = 3;
  indexOfLastPost = currentPage * postPerPage;
  indexOfFirstPost = indexOfLastPost - postPerPage;
  currentPosts = Post.slice(indexOfFirstPost, indexOfLastPost);

  for (let i = 1; i <= Math.ceil(Post.length / postPerPage); i++) {
    pageNumber.push(i);
  }
  currPage();
}

// print all data onload....

async function fetchData() {
  await jsonfile();
  paginating();
  print(currentPosts);
  pageNumbers(currentNumLine);
}

// Data access to user..........
function print(currentPosts) {
  var userdatas = document.getElementById("_card");

  userdatas.innerHTML = `${currentPosts
    .map(
      (data) => `<div class="__cards" id="data">

<Strong> Id :</Strong> <span id="Id">${data.id}</span><br><br>
<Strong> Title :</Strong> <span id="Title">${data.title}</span><br><br>
<Strong> Body :</Strong> <span id="Body">${data.body}</span></div><br><br></div>`
    )
    .join("")}`;
}

// filtering using  search button

document.getElementById("searchbar").addEventListener("click", async () => {
  await jsonfile();

  let InputId = await document.getElementById("search").value;
  let x = await Post.filter((user) => user.id == InputId).map((user) => {
    return user;
  });
  FetchedData(x);
});

//Searching//

function FetchedData(Post) {
  var userdatas = document.getElementById("_card");

  userdatas.innerHTML = `${Post.map(
    (data) => `
      <div class="__cards" id="data">
<Strong> Id :</Strong> <span id="Id">${data.id}</span><br><br><br>
<Strong> Title :</Strong> <span id="Title">${data.title}</span><br><br><br>
<Strong> Body :</Strong> <span id="Body">${data.body}</span></div><br><br><br></div>`
  ).join("")}`;
  document.getElementById("data").style.paddingTop = "6px";
  document.getElementById("data").style.marginLeft = "20rem ";
}

//paginate
function paginate(num) {
  currentPage = num;
  paginating();
  print(currentPosts);
}

//print number of pagination
function pageNumbers(pageNumber) {
  document.getElementById("pageNum").innerHTML = `<div class = "pgn">
  <a onclick="incerementPageNum(${--backward})" class="btns">Back</a>
  ${pageNumber
    .map(
      (num) => ` 
  <a onclick="paginate(${num})">
  ${num}</a>
  
  `
    )
    .join("")}
    <a onclick="incerementPageNum(${++forward})" class="btns">Next</a></div>`;
}

function incerementPageNum(num) {
  if (num > 7) {
    num = 1;
  }
  if (num < 1) {
    num = 1;
  }
  backward = num;
  forward = num;
  currentNumLine = num;
  currPage();
  pageNumbers(currentNumLine);
}
