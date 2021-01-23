/**
 * Webapp with Pagination
 */

/**
 * Deklaration der Variablen
 */
let index;
let mitarbeiter = undefined;

/**
 * Ausgabe zeigen
 */
function showUI() {
    //Identification
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `Vorname: ${mitarbeiter.firstname}<br>` +
        `Name: ${mitarbeiter.lastname}<br>` +
        `Beruf: ${mitarbeiter.profession}`;

    //Lehrbetrieb
    htmlObj = document.getElementById("kontaktdaten");
    htmlObj.innerHTML =
        `Tel: ${mitarbeiter.betrieb.telefonnummer}<br>` +
        `Email: ${mitarbeiter.betrieb.email}<br>` +
        `Abteilung: ${mitarbeiter.betrieb.abteilung}<br>` ;

    //Kurse - Berufskunde
    htmlObj = document.getElementById("elearnings");
    //clear
    htmlObj.innerHTML = "";
    //set
    mitarbeiter.courses.elearnings.forEach(elearningid => {
        htmlObj.innerHTML += `${elearningid}<br>`;
    });


    //Index im Pagination-Element zeigen
    htmlObj = document.getElementById("showIndex");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML = index;
}


/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined) {
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (mitarbeiterListe.length - 1 > index) {
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    mitarbeiter = mitarbeiterListe[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined) {
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0) {
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    mitarbeiter = mitarbeiterListe[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (mitarbeiter === undefined) {
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    mitarbeiter = mitarbeiterListe[index];
    //zeige den Eintrag
    showUI();
}


let portfolio = {
    gender: ["Mrs.", "Mr."],
    vorgesetzter: ["Nino Augstburger", "Demian Marty"],

    getGender(){
        return `${this.gender[0]}, ${this.gender[1]}`
    },

    getVorgesetzte(){
        return `${this.vorgesetzter[0]}, ${this.vorgesetzter[1]}`
    }
}

htmlObj = document.getElementById("portfolio");
htmlObj.innerHTML =
    `${portfolio.gender[1]}<br>` +
    `${portfolio.vorgesetzter[0]}<br>`;