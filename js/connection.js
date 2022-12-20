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

            document.getElementById("p-e-a1-i").setAttribute("src", data[0].id_pub_sis);
            document.getElementById("p-e-b1-v").setAttribute("src", data[1].id_pub_sis);
            document.getElementById("p-e-c1-i").setAttribute("src", data[2].id_pub_sis);
            document.getElementById("p-o-a1-v").setAttribute("src", data[3].id_pub_sis);
            document.getElementById("p-o-a2-i").setAttribute("src", data[4].id_pub_sis);
            document.getElementById("p-o-b1-v").setAttribute("src", data[5].id_pub_sis);
            document.getElementById("p-o-e1-i").setAttribute("src", data[6].id_pub_sis);

            document.getElementById("p-cv-e-a1-i").setAttribute("src", data[7].id_pub_sis);
            document.getElementById("p-cv-e-b1-v").setAttribute("src", data[8].id_pub_sis);
            document.getElementById("p-cv-e-b2-i").setAttribute("src", data[9].id_pub_sis);
            document.getElementById("p-cv-e-c1-v").setAttribute("src", data[10].id_pub_sis);
            document.getElementById("p-cv-e-c2-i").setAttribute("src", data[11].id_pub_sis);
            document.getElementById("p-cv-e-d1-v").setAttribute("src", data[12].id_pub_sis);
            document.getElementById("p-cv-o-a1-i").setAttribute("src", data[13].id_pub_sis);
            document.getElementById("p-cv-o-a2-v").setAttribute("src", data[14].id_pub_sis);
            document.getElementById("p-cv-o-a3-i").setAttribute("src", data[15].id_pub_sis);
            document.getElementById("p-cv-o-b1-v").setAttribute("src", data[16].id_pub_sis);
            document.getElementById("p-cv-o-b2-i").setAttribute("src", data[17].id_pub_sis);
            document.getElementById("p-cv-o-c1-v").setAttribute("src", data[18].id_pub_sis);
            document.getElementById("p-cv-o-d1-i").setAttribute("src", data[19].id_pub_sis);
            document.getElementById("p-cv-o-e1-v").setAttribute("src", data[20].id_pub_sis);

            document.getElementById("p1-cb-e-a1-i").setAttribute("src", data[21].id_pub_sis);
            document.getElementById("p2-cb-e-a2-v").setAttribute("src", data[22].id_pub_sis);
            document.getElementById("p3-cb-e-a3-i").setAttribute("src", data[23].id_pub_sis);
            document.getElementById("p4-cb-e-b1-v").setAttribute("src", data[24].id_pub_sis);
            document.getElementById("p5-cb-e-b2-i").setAttribute("src", data[25].id_pub_sis);
            document.getElementById("p6-cb-e-b3-v").setAttribute("src", data[26].id_pub_sis);
            document.getElementById("p7-cb-e-b4-i").setAttribute("src", data[27].id_pub_sis);
            document.getElementById("p8-cb-e-c1-v").setAttribute("src", data[28].id_pub_sis);
            document.getElementById("p9-cb-e-c2-i").setAttribute("src", data[29].id_pub_sis);
            document.getElementById("p10-cb-e-d1-v").setAttribute("src", data[30].id_pub_sis);
            document.getElementById("p11-cb-e-d2-i").setAttribute("src", data[31].id_pub_sis);
            document.getElementById("p12-cb-o-a0-v").setAttribute("src", data[32].id_pub_sis);
            document.getElementById("p13-cb-o-a1-i").setAttribute("src", data[33].id_pub_sis);
            document.getElementById("p14-cb-o-a2-v").setAttribute("src", data[34].id_pub_sis);
            document.getElementById("p15-cb-o-a3-i").setAttribute("src", data[35].id_pub_sis);
            document.getElementById("p16-cb-o-a4-v").setAttribute("src", data[36].id_pub_sis);
            document.getElementById("p17-cb-o-a5-i").setAttribute("src", data[37].id_pub_sis);
            document.getElementById("p18-cb-o-b1-v").setAttribute("src", data[38].id_pub_sis);
            document.getElementById("p19-cb-o-b2-i").setAttribute("src", data[39].id_pub_sis);
            document.getElementById("p20-cb-o-b3-v").setAttribute("src", data[40].id_pub_sis);
            document.getElementById("p21-cb-o-b4-i").setAttribute("src", data[41].id_pub_sis);
            document.getElementById("p22-cb-o-c1-v").setAttribute("src", data[42].id_pub_sis);
            document.getElementById("p23-cb-o-c2-i").setAttribute("src", data[43].id_pub_sis);
            document.getElementById("p24-cb-o-d1-v").setAttribute("src", data[44].id_pub_sis);
            document.getElementById("p25-cb-o-e1-i").setAttribute("src", data[45].id_pub_sis);
            document.getElementById("p26-cb-o-e2-v").setAttribute("src", data[46].id_pub_sis);
            document.getElementById("p27-cb-o-e2-i").setAttribute("src", data[47].id_pub_sis);

        } else {
            //console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
        }
    });
    xhr.open(method, url);
    xhr.send();
})();

