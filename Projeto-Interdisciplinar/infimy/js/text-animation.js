const text = document.querySelector(".segundo-texto");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "tecnologicos";
    }, 0);
    setTimeout(() => {
        text.textContent = "seguros";
    }, 4000);
    setTimeout(() => {
        text.textContent = "com foco no usuário";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);
