(() => {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url = "http://localhost:8080/api/v2/publicidad_entorno_infs/1";
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        //console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("éxito");
            let data = JSON.parse(xhr.responseText);
            /*for(i=0;i<=48;i++){
                document.getElementById(`${data.pubEntInf[i].nombre_publicidad}`).setAttribute("src", `${data.pubEntInf[i].Enlace}`);
            }*/
        data.pubEntInf.forEach((el) => {
            document.getElementById(`${el.publicidad_entorno['nombre_publicidad']}`).setAttribute("src", `${el.publicidad_empresa['Enlace']}`);
        });
        
        } else {
            //console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
        }
    });
    xhr.open(method, url);
    xhr.send();
})();
