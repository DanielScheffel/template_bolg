const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

const scrollto = (el) => {
    let navbar = document.querySelector('#navbar');
    let offset = navbar.offsetHeight;
    let elementPos = select(el).offsetTop;
    window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
    });
};

let backtop = document.querySelector("#mytop");
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    backtop.style.display = "block";
  } else {
    backtop.style.display = "none";
  }
}

function backTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}