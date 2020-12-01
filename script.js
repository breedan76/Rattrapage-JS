const url = "https://www.random.org/integers/?num=2&min=1&max=6&col=1&base=10&format=plain&rnd=new";





let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let score = document.getElementById("score");

function rolldes() {
  let myRequest = new Request(url);

  fetch(myRequest)
    .then(function(response) {
      return response.blob();
    })


    .then(function(myBlob) {
      myBlob.text().then(function(text){
      const DATA = text.split("");
      let roll1 = DATA[0];
      let roll2 = DATA[2];



      img1.setAttribute("src","images/des" + roll1 + ".png");
      img2.setAttribute("src","images/des" + roll2 + ".png");




      if(roll1 > roll2){
        score.innerHTML = "Le Joueur 1 gagne la partie";
      } else if(roll1 === roll2){
        score.innerHTML = "Egalité";
      } else{
        score.innerHTML = "Le Joueur 2 gagne la partie";
      }

    });

  });

}