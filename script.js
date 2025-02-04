
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild(loader);
    });
});

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