 let compteur = 0;

document.getElementById('ombre').addEventListener("mousemove", (e) =>{

    //  compteur++;
    //  console.log(compteur);
    // const {left,top} = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX / window.innerWidth) * 100 + "%";
    const y = (e.clientY / window.innerHeight) * 100 + "%";

    document.documentElement.style.setProperty("--mouse-x",x);
    document.documentElement.style.setProperty("--mouse-y",y);



});