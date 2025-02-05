
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild(loader);
    });
});

function openNav(){
    const sideNav = document.getElementById("side-nav");
    sideNav.style.width = "100%";
    sideNav.style.left = "0";
    const checkCart = document.getElementById("open-cart");
    checkCart.style.width = "0%";
    checkCart.style.right = "-250px";
}
function closeNav(){
    const sideNav = document.getElementById("side-nav");
    sideNav.style.width = "0%";
    sideNav.style.left = "-250px";
}

function openUser(){
    const userPopup = document.getElementById("user-popup");
    userPopup.style.display = "flex";
}
function closeUser(){
    const userPopup = document.getElementById("user-popup");
    userPopup.style.display = "none";
}

function openCart(){
    const checkCart = document.getElementById("open-cart");
    checkCart.style.width = "100%";
    checkCart.style.right = "0";
    const cartWrapper = document.getElementById("open-cart-wrapper");
    cartWrapper.style.boxShadow = "0 0 0 100vmax rgba(0, 0, 0, .5)";
}
function closeCart(){
    const checkCart = document.getElementById("open-cart");
    checkCart.style.width = "0%";
    checkCart.style.right = "-250px";
    const cartWrapper = document.getElementById("open-cart-wrapper");
    cartWrapper.style.boxShadow = "none";
}



function openFfollow(){
    document.getElementById('afollow').style.display = 'flex';
}
function openFbrand(){
    document.getElementById('abrand').style.display = 'flex';
}
function openFcare(){
    document.getElementById('acare').style.display = 'flex';
}
function openFhelp(){
    document.getElementById('ahelp').style.display = 'flex';
}