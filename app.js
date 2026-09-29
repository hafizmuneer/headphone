function changeContent(){
    document.getElementById("name").innerHTML = "Smart Headphone"
    document.getElementById("des").innerHTML = "This Is The Best way To Learn Everything"
    document.getElementById("price").innerHTML = "price : $40"

}
function changeproduct() {
    document.getElementById("img1").src = "images/images (18).jpg"
    
}
function mybtn(){
    let btn = document.getElementById("input").value
    document.getElementById("wellcome").innerHTML = "Welcome Mr" +" "+ btn;
}
function over() {
    document.getElementById("img1").src = "images/images (18).jpg"
    
}
function out(){
    document.getElementById("img1").src = "images/image1.png"

}
function complete(){
    alert("succesfully complete ")
}