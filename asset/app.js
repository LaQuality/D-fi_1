 let compteur = 0;
const ombre = document.getElementById("ombre");
document.getElementById('ombre').addEventListener("mousemove", (e) =>{

    //  compteur++;
    //  console.log(compteur);
    // const {left,top} = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX / window.innerWidth) * 100 + "%";
    const y = (e.clientY / window.innerHeight) * 100 + "%";

    document.documentElement.style.setProperty("--mouse-x",x);
    document.documentElement.style.setProperty("--mouse-y",y);



});


ombre.addEventListener("touchmove", (e) =>{

    e.preventDefault();
    let touch = e.touches[0];

    const x = (touch.clientX / window.innerWidth) * 100 + "%";
    const y = (touch.clientY / window.innerHeight) * 100 + "%";

    document.documentElement.style.setProperty("--mouse-x",x);
    document.documentElement.style.setProperty("--mouse-y",y);
  



});
