(() => {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url = " http://localhost:3001/publicidad_entorno";
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        //console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("éxito");
            let data = JSON.parse(xhr.responseText);

            document.getElementById("p-cv-e-a1-i").setAttribute("src", data[0].id_pub_sis);
            document.getElementById("p-cv-e-b1-v").setAttribute("src", data[1].id_pub_sis);
            document.getElementById("p-cv-e-b2-i").setAttribute("src", data[2].id_pub_sis);
            document.getElementById("p-cv-e-c1-v").setAttribute("src", data[3].id_pub_sis);
            document.getElementById("p-cv-e-c2-i").setAttribute("src", data[4].id_pub_sis);
            document.getElementById("p-cv-e-d1-v").setAttribute("src", data[5].id_pub_sis);
            document.getElementById("p-cv-o-a1-i").setAttribute("src", data[6].id_pub_sis);
            document.getElementById("p-cv-o-a2-v").setAttribute("src", data[7].id_pub_sis);
            document.getElementById("p-cv-o-a3-i").setAttribute("src", data[8].id_pub_sis);
            document.getElementById("p-cv-o-b1-v").setAttribute("src", data[9].id_pub_sis);
            document.getElementById("p-cv-o-b2-i").setAttribute("src", data[10].id_pub_sis);
            document.getElementById("p-cv-o-c1-v").setAttribute("src", data[11].id_pub_sis);
            document.getElementById("p-cv-o-d1-i").setAttribute("src", data[12].id_pub_sis);
            document.getElementById("p-cv-o-e1-v").setAttribute("src", data[13].id_pub_sis);

            document.getElementById("").setAttribute("src", data[14].id_pub_sis);
            document.getElementById("").setAttribute("src", data[15].id_pub_sis);
            document.getElementById("").setAttribute("src", data[16].id_pub_sis);
            document.getElementById("").setAttribute("src", data[17].id_pub_sis);
            document.getElementById("").setAttribute("src", data[18].id_pub_sis);
            document.getElementById("").setAttribute("src", data[19].id_pub_sis);
            document.getElementById("").setAttribute("src", data[20].id_pub_sis);

            document.getElementById("").setAttribute("src", data[21].id_pub_sis);
            document.getElementById("").setAttribute("src", data[22].id_pub_sis);
            document.getElementById("").setAttribute("src", data[23].id_pub_sis);
            document.getElementById("").setAttribute("src", data[24].id_pub_sis);
            document.getElementById("").setAttribute("src", data[25].id_pub_sis);
            document.getElementById("").setAttribute("src", data[26].id_pub_sis);
            document.getElementById("").setAttribute("src", data[27].id_pub_sis);
            document.getElementById("").setAttribute("src", data[28].id_pub_sis);
            document.getElementById("").setAttribute("src", data[29].id_pub_sis);
            document.getElementById("").setAttribute("src", data[30].id_pub_sis);
            document.getElementById("").setAttribute("src", data[31].id_pub_sis);
        } else {
            //console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
        }
    });
    xhr.open(method, url);
    xhr.send();
})();


(() => {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url = " http://localhost:3001/publicidad_entorno";
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        //console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("éxito");
            let data = JSON.parse(xhr.responseText);


            
        } else {
            //console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
        }
    });
    xhr.open(method, url);
    xhr.send();
})();


