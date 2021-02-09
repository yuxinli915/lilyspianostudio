document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector("#nav");

    navBar.addEventListener("click", e => {
        if (e.target.tagName === `A`) {
            
            document.querySelector(".current").classList.remove("current");
            e.target.parentElement.classList.add("current");
        }
    })

// document.addEventListener("scroll", e =>{
//     let pos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
//     document.querySelectorAll("section").forEach(s=>{

//         if(s.offsetHeight <= pos){
//             if( document.querySelector("#nav .current") != null){
//                 document.querySelector("#nav .current").classList.remove("current");
//             }
//             document.querySelectorAll("#nav li").forEach(li=>{

//                 if(li.firstChild.textContent.toLowerCase() == s.id){
//                     li.classList.add("current");
//                 }
//             })
//         }
//     })
// })

//     window.addEventListener("scroll", ()=>{
//         const h = document.querySelector("header").offsetHeight;
//         const y = document.body.scrollTop;
//     })
});


