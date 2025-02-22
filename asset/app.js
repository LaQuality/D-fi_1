 let compteur = 1;
 const ombre = document.getElementById("ombre");

ombre.addEventListener("mousemove", (e) =>{

    //  compteur++;
    //  console.log(compteur);
    // const {left,top} = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX / window.innerWidth) * 100 + "%";
    const y = (e.clientY / window.innerHeight) * 100 + "%";

    document.documentElement.style.setProperty("--mouse-x",x);
    document.documentElement.style.setProperty("--mouse-y",y);



});


ombre.addEventListener("mouseup", (e) =>{

    compteur++;
         
    document.querySelector(".hello").style.backgroundImage = `url(images/${compteur}.jpg)`;   
     
     if(compteur == 4){
         compteur = 1;
     }



});





ombre.addEventListener("touchmove", (e) =>{

    e.preventDefault();
    let touch = e.touches[0];

    const x = (touch.clientX / window.innerWidth) * 100 + "%";
    const y = (touch.clientY / window.innerHeight) * 100 + "%";

    document.documentElement.style.setProperty("--mouse-x",x);
    document.documentElement.style.setProperty("--mouse-y",y);
    



});

document.querySelector(".hello").addEventListener("touchend",function(){

     
    compteur++;
    
    
     
     document.querySelector(".hello").style.backgroundImage = `url(images/${compteur}.jpg)`;   
     
     if(compteur == 4){
         compteur = 1;
     }
});



