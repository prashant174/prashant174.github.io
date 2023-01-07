


// console.log("hello")

document.querySelector(".cross").style.display="none"
document.querySelector(".hemburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebargo")
    if(document.querySelector(".sidebar").classList.contains("sidebargo")){
        document.querySelector(".hem").style.display='inline'
        document.querySelector(".cross").style.display="none"
    }
    else{
        document.querySelector(".hem").style.display="none"
        setTimeout(()=>{
            document.querySelector(".cross").style.display="inline"
        },400)
       
    }
})