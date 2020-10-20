const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function konamiChecker(e){
  const key = e.key;
  
  console.log(key);
  if(key === codes[index]){
    index++;
    if(index === codes.length) {
      alert("You're the best around. Nothing's ever gonna bring you down.")
    }
    
    
  } else {
      index = 0;
  }
}

    function init() {
      document.body.addEventListener("keydown", (e) => {
        konamiChecker(e);
        }
    );
}

