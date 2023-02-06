let btn = document.getElementById("start");
let code = document.getElementById("code");
let aide = document.getElementById("aide");

let all_btn = document.getElementsByClassName("btn");

let true_code = Math.floor(Math.random() * (1000 - -1000)) + -1000;
console.log(true_code);

btn.addEventListener("click", () => {
    let start =  Math.floor(Math.random() * (1000 - -1000)) + -1000;
    code.innerText = start;
    
    for (let i = 0; i < all_btn.length; i++) {
        all_btn[i].addEventListener("click", () => {
            start += parseInt(all_btn[i].textContent);

            code.innerText = start;

            if (start == true_code) {
                alert("Coffre Dévérouiller");
            } else if (start > true_code) {
                aide.innerText = "C'est Moins";
            } else if (start < true_code) {
                aide.innerText = "C'est Plus";
            }
        });
    }
});