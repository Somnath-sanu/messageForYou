const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


const hide = document.querySelector("#butt");
const wrapper2 = document.querySelector(".wrapper2");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you tomorrow!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();//returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height
    

  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Nice Try 😁")
  });

  hide.addEventListener("click",()=>{
    wrapper2.style.display = "none";
    wrapper.style.display = "block";
  })
