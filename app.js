import sanger from "./sanger.json" with { type: "json" };


const sangliste = document.querySelector("#sangliste");
sanger.forEach(sang => {
    const nyListe=document.createElement("ul");
    const listeElement = document.createElement("li");
    listeElement.innerHTML = `<h3>${sang.tittel}</h3> laget av ${sang.artist} fra albumet ${sang.album} og er i sjangeren ${sang.sjanger}. ${sang.anmeldelse}`;
    nyListe.appendChild(listeElement);

    if (sang.bilde) {
        const bildeElement = document.createElement("img");
        bildeElement.src = `sanger-bilder/${sang.bilde}`;
        nyListe.appendChild(bildeElement);
    }

    if (sang.link) {
        const videoElement = document.createElement("iframe");
        videoElement.src = sang.link;
        videoElement.title = "YouTube video player";
        videoElement.frameBorder = "0";
        videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        videoElement.referrerPolicy = "strict-origin-when-cross-origin";
        videoElement.allowFullscreen = true;
        nyListe.appendChild(videoElement);
    }

    sangliste.appendChild(nyListe);
});



 // 

 // <iframe src="${sang.link}" title="Youtube Videospiller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>