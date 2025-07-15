
const articles = [
    {
        nl: "Artikel 1 - Samenscholingsverbod: Het is verboden om met meer dan 5 personen samen te scholen op openbare plaatsen zonder vergunning.",
        en: "Article 1 - Gathering Ban: It is prohibited to gather in groups larger than 5 people in public areas without a permit."
    },
    {
        nl: "Artikel 2 - Wapenvergunning: Het dragen van wapens is enkel toegestaan met een geldige vergunning.",
        en: "Article 2 - Weapon License: Carrying weapons is only permitted with a valid license."
    },
    {
        nl: "Artikel 3 - Identificatieplicht: Burgers dienen zich te allen tijde te kunnen identificeren op verzoek van de autoriteiten.",
        en: "Article 3 - Identification Requirement: Citizens must be able to identify themselves upon request of the authorities."
    },
    {
        nl: "Artikel 4 - Verbod op gezichtsbedekking: Het dragen van maskers of andere gezichtsbedekkingen is verboden tenzij anders toegestaan.",
        en: "Article 4 - Face Covering Ban: Wearing masks or other face coverings is prohibited unless permitted."
    },
    {
        nl: "Artikel 5 - Openbare dronkenschap: Zichtbare dronkenschap op openbare plaatsen is verboden.",
        en: "Article 5 - Public Intoxication: Visible intoxication in public areas is prohibited."
    },
    {
        nl: "Artikel 6 - Illegale goederen: Handel en bezit van verboden goederen is strafbaar.",
        en: "Article 6 - Illegal Goods: Trading and possession of banned items is punishable."
    },
    {
        nl: "Artikel 7 - Dierenmishandeling: Mishandeling of verwaarlozing van dieren is verboden.",
        en: "Article 7 - Animal Abuse: Mistreatment or neglect of animals is prohibited."
    },
    {
        nl: "Artikel 8 - Snelheidsbeperking: Het is verboden om sneller dan toegestaan te rijden met een paard of wagen.",
        en: "Article 8 - Speed Limit: Riding horses or wagons faster than allowed is prohibited."
    },
    {
        nl: "Artikel 9 - Openbare ordeverstoring: Het veroorzaken van overlast of onrust in de openbare ruimte is verboden.",
        en: "Article 9 - Disturbance of Public Order: Causing disturbance or unrest in public space is prohibited."
    }
];

function renderArticles(query = "") {
    const container = document.getElementById("apv-list");
    container.innerHTML = "";
    articles.forEach((a, i) => {
        if (a.nl.toLowerCase().includes(query.toLowerCase()) || a.en.toLowerCase().includes(query.toLowerCase())) {
            const div = document.createElement("div");
            div.className = "article";
            div.innerHTML = `<h2>${a.nl.split(":")[0]}</h2><p>${a.nl}</p><p><em>${a.en}</em></p>`;
            container.appendChild(div);
        }
    });
}

document.getElementById("search").addEventListener("input", e => renderArticles(e.target.value));
window.onload = () => renderArticles();
