let website = document.querySelector(".main")
let textName = document.querySelector(".main h1")
let mouseFollower = document.querySelector(".mosueFollower")

website.addEventListener("mousemove", function(dets){
    mouseFollower.style.top = dets.clientY + "px"
    mouseFollower.style.left = dets.clientX + "px"
})

textName.addEventListener("mouseenter", function(){
    mouseFollower.style.width = "50px"
    mouseFollower.style.height = "50px"
})

textName.addEventListener("mouseleave", function(){
    mouseFollower.style.width = "15px"
    mouseFollower.style.height = "15px"
})