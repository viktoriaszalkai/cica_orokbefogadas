
            function adatokOutput(){
                let nev = document.getElementById("neve").value;
                let email = document.getElementById("email").value;
                let telefon = document.getElementById("telefon").value;
                let orszag = document.getElementById("orszag").value;
                let varos = document.getElementById("varos").value;
                let utca = document.getElementById("utca").value;
                
                localStorage.setItem("textvalue", nev);
                localStorage.setItem("textvalue", email);
                localStorage.setItem("textvalue", telefon);
                localStorage.setItem("textvalue", orszag);
                localStorage.setItem("textvalue", varos);
                localStorage.setItem("textvalue", utca);
            }


document.getElementById("nevOutput").innerText=localStorage.getItem("textvalue");
document.getElementById("emailOutput").innerHTML=localStorage.getItem("textvalue");
document.getElementById("telefonOutput").innerHTML=localStorage.getItem("textvalue");
document.getElementById("orszagOutput").innerHTML=localStorage.getItem("textvalue");
document.getElementById("varosOutput").innerHTML=localStorage.getItem("textvalue");
document.getElementById("utcaOutput").innerHTML=localStorage.getItem("textvalue");
