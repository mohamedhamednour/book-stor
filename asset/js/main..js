// var x = 'x'
// var tilte = document.getElementsByClassName('p_in-id')[0]
// var winner_tiltle = document.getElementsByClassName('boards')[0]

///localstorge function

function Fun_Local(e) {
  if (e == 1) {
    // Put the vlaue into storage 1

    var img = "asset/img/photo_1.jpeg";
    title = "black-girl";
    localStorage.setItem("title", title);

    localStorage.setItem("imgData", img);
  } else if (e == 2) {
    // Put the vlaue into storage 2

    let img = "asset/img/photo2.jpg";
    title = "family";
    localStorage.setItem("title2", title);

    localStorage.setItem("imgData2", img);
  } else if (e == 3) {
    // Put the vlaue into storage 3

    let imgs = "asset/img/hourse.jpeg";
    let title = "hourse";
    localStorage.setItem("title3", title);

    localStorage.setItem("imgData3", imgs);
  } else if (e == 4) {
    // Put the vlaue into storage 4

    let img4 = "asset/img/react.jpg";
    let titles = "react js";
    localStorage.setItem("title4", titles);

    localStorage.setItem("imgData4", img4);
  } else if (e == 5) {
    // Put the vlaue into storage 5

    let img5 = "asset/img/js.png";
    let title5 = "js";
    localStorage.setItem("title5", title5);

    localStorage.setItem("imgData5", img5);
  } else if (e == 6) {
    // Put the vlaue into storage 6

    let img6 = "asset/img/css.png";
    let title6 = "css";
    localStorage.setItem("title6", title6);

    localStorage.setItem("imgData6", img6);
  }
}

function Fun_add(e) {
  // add read book 1
  if (e == 1) {
    console.log("yes");
    document.getElementById("myImg").src = "asset/img/photo_1.jpeg";
    document.getElementById("mypar").innerHTML = "title : black girl";
    document.getElementById("mypar2").innerHTML =
      "descrption :       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique est laborum libero earum itaque excepturi quaerat perferendis, laboriosam consectetur, hic corporis voluptate? Repellendus, adipisci rem? Quia recusandae dicta delectus?  ";
  } else if (e == 2) {
    // add read book 2

    document.getElementById("myImg").src = "asset/img/photo2.jpg";
    document.getElementById("mypar").innerHTML = "title : famils";
    document.getElementById("mypar2").innerHTML =
      "descrption :       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique est laborum libero earum itaque excepturi quaerat perferendis, laboriosam consectetur, hic corporis voluptate? Repellendus, adipisci rem? Quia recusandae dicta delectus?  ";
  } else if (e == 3) {
    // add read book 3

    document.getElementById("myImg").src =
      "      asset/img/hourse.jpeg        ";
    document.getElementById("mypar").innerHTML = "title : hourse";
    document.getElementById("mypar2").innerHTML =
      "descrption :       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique est laborum libero earum itaque excepturi quaerat perferendis, laboriosam consectetur, hic corporis voluptate? Repellendus, adipisci rem? Quia recusandae dicta delectus?  ";
  } else if (e == 4) {
    // add read book 4

    document.getElementById("myImg").src = "      asset/img/react.jpg";
    document.getElementById("mypar").innerHTML = "title : react js ";
    document.getElementById("mypar2").innerHTML =
      "descrption :       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique est laborum libero earum itaque excepturi quaerat perferendis, laboriosam consectetur, hic corporis voluptate? Repellendus, adipisci rem? Quia recusandae dicta delectus?  ";
  } else if (e == 5) {
    // add read book 5

    document.getElementById("myImg").src = "      asset/img/js.png";
    document.getElementById("mypar").innerHTML = "title :  js ";
    document.getElementById("mypar2").innerHTML =
      "descrption :       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique est laborum libero earum itaque excepturi quaerat perferendis, laboriosam consectetur, hic corporis voluptate? Repellendus, adipisci rem? Quia recusandae dicta delectus?  ";
  } else if (e == 6) {
    // add read book 6

    document.getElementById("myImg").src = "      asset/img/css.png";
    document.getElementById("mypar").innerHTML = "title :  css ";
    document.getElementById("mypar2").innerHTML =
      "descrption :       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique est laborum libero earum itaque excepturi quaerat perferendis, laboriosam consectetur, hic corporis voluptate? Repellendus, adipisci rem? Quia recusandae dicta delectus?  ";
  }
}

// add favorite books
// 1 image add favorite

const dataImage = localStorage.getItem("imgData");
const datatilte = localStorage.getItem("title");
// 2 image add favorite

const dataImage2 = localStorage.getItem("imgData2");
const datatilte2 = localStorage.getItem("title2");
// 3 image add favorite

const dataImage3 = localStorage.getItem("imgData3");
const datatilte3 = localStorage.getItem("title3");
// 4 image add favorite

const dataImage4 = localStorage.getItem("imgData4");
const datatilte4 = localStorage.getItem("title4");
// 5 image add favorite

const dataImage5 = localStorage.getItem("imgData5");
const datatilte5 = localStorage.getItem("title5");

// 6 image add favorite

const dataImage6 = localStorage.getItem("imgData6");
const datatilte6 = localStorage.getItem("title6");

// 1 image add favorite
document.getElementById("myImgs").src = dataImage;
document.getElementById("p_in-id").innerHTML = datatilte;
// 2 image add favorite

document.getElementById("myImgs2").src = dataImage2;
document.getElementById("p_in-id2").innerHTML = datatilte2;
// 3 image add favorite

document.getElementById("myImgs3").src = dataImage3;
document.getElementById("p_in-id3").innerHTML = datatilte3;
// 4 image add favorite

document.getElementById("myImgs4").src = dataImage4;
document.getElementById("p_in-id4").innerHTML = datatilte4;

// 5 image add favorite

document.getElementById("myImgs5").src = dataImage5;
document.getElementById("p_in-id5").innerHTML = datatilte5;

// 6 image add favorite

document.getElementById("myImgs6").src = dataImage6;
document.getElementById("p_in-id6").innerHTML = datatilte6;


// function hiiden element delete button if img  null
function SaveImgUrl() {
  let ids = document.getElementById("p_in-id");
  let id2 = document.getElementById("p_in-id2");
  let id3 = document.getElementById("p_in-id3");
  let id4 = document.getElementById("p_in-id4");
  let id5 = document.getElementById("p_in-id5");
  let id6 = document.getElementById("p_in-id6");
 
  // button one
  if (ids.innerHTML == "black-girl") {
    document.getElementById("btn-one").style.visibility = "visible";
  } else {
    document.getElementById("btn-one").style.visibility = "hidden";
  }
  // button two

  if (id2.innerHTML == "family") {
    document.getElementById("btn-two").style.visibility = "visible";
  } else {
    document.getElementById("btn-two").style.visibility = "hidden";
  }
  // button onthreee

  if (id3.innerHTML == "hourse") {
    document.getElementById("btn-three").style.visibility = "visible";
  } else {
    document.getElementById("btn-three").style.visibility = "hidden";
  }

    // button four

  if (id4.innerHTML == "react-js") {
    document.getElementById("btn-four").style.visibility = "visible";
  } else {
    document.getElementById("btn-four").style.visibility = "hidden";
  }
  // button five

  if (id5.innerHTML == "js") {
    document.getElementById("btn-five").style.visibility = "visible";
  } else {
    document.getElementById("btn-five").style.visibility = "hidden";
  }
  // button six

  if (id6.innerHTML == "css") {
    document.getElementById("btn-six").style.visibility = "visible";
  } else {
    document.getElementById("btn-six").style.visibility = "hidden";
  }
}

SaveImgUrl();
