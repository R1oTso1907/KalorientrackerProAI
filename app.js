// ✅ Erweiterte Lebensmittel-Datenbank mit vielen Produkten und Gerichten (mit Gramm-Angaben pro 100g, sofern nicht anders angegeben)
const lebensmittelDatenbank = [
    // Eier und Milchprodukte
    { name: "Gekochtes Ei", kcal: 155, protein: 13, gramm_pro_portion: 50 }, // ca. 1 Ei
    { name: "Rührei", kcal: 143, protein: 10, gramm_pro_portion: 100 },
    { name: "Spiegelei", kcal: 196, protein: 13, gramm_pro_portion: 100 },
    { name: "Magerquark", kcal: 68, protein: 12, gramm_pro_portion: 100 },
    { name: "Joghurt, Natur (1.5% Fett)", kcal: 60, protein: 3.5, gramm_pro_portion: 100 },
    { name: "Milch 1.5%", kcal: 47, protein: 3.4, gramm_pro_portion: 100 },
    { name: "Milch 3.5%", kcal: 64, protein: 3.3, gramm_pro_portion: 100 },
    { name: "Activia Vanille", kcal: 97, protein: 3.3, gramm_pro_portion: 100 },
    { name: "Emmi Caffè Latte", kcal: 74, protein: 2.5, gramm_pro_portion: 100 },
    { name: "Gouda", kcal: 356, protein: 24, gramm_pro_portion: 100 },
    { name: "Mozzarella", kcal: 280, protein: 18, gramm_pro_portion: 100 },
    { name: "Emmentaler", kcal: 380, protein: 29, gramm_pro_portion: 100 },
    { name: "Feta", kcal: 265, protein: 14, gramm_pro_portion: 100 },
    { name: "Ayran", kcal: 37, protein: 2.5, gramm_pro_portion: 100 }, // Türkisches Joghurtgetränk
    { name: "Ziegenkäse", kcal: 364, protein: 22, gramm_pro_portion: 100 },


    // Fette und Öle
    { name: "Thomy Mayonnaise", kcal: 720, protein: 1, gramm_pro_portion: 100 },
    { name: "Butter", kcal: 717, protein: 1, gramm_pro_portion: 100 },
    { name: "Olivenöl", kcal: 884, protein: 0, gramm_pro_portion: 100 },
    { name: "Sonnenblumenöl", kcal: 884, protein: 0, gramm_pro_portion: 100 },

    // Brot und Getreideprodukte
    { name: "Weissbrot", kcal: 265, protein: 8, gramm_pro_portion: 100 },
    { name: "Vollkornbrot", kcal: 250, protein: 9, gramm_pro_portion: 100 },
    { name: "Toastbrot", kcal: 270, protein: 8, gramm_pro_portion: 100 },
    { name: "Haferflocken", kcal: 370, protein: 13, gramm_pro_portion: 100 },
    { name: "Cornflakes", kcal: 380, protein: 7, gramm_pro_portion: 100 },
    { name: "Schokomüsli", kcal: 410, protein: 8, gramm_pro_portion: 100 },
    { name: "Fruchtmüsli", kcal: 360, protein: 6, gramm_pro_portion: 100 },
    { name: "Knäckebrot", kcal: 350, protein: 9, gramm_pro_portion: 100 },
    { name: "Reiswaffel", kcal: 387, protein: 7.5, gramm_pro_portion: 100 },
    { name: "Bulgur, gekocht", kcal: 83, protein: 3, gramm_pro_portion: 100 }, // Türkische Spezialität
    { name: "Linsen, gekocht", kcal: 116, protein: 9, gramm_pro_portion: 100 },
    { name: "Kichererbsen, gekocht", kcal: 164, protein: 9, gramm_pro_portion: 100 },
    { name: "Simit (Türkischer Sesamring)", kcal: 280, protein: 9, gramm_pro_portion: 100 }, // Türkisches Gebäck

    // Fleisch und Fisch
    { name: "Hähnchenbrust gebraten", kcal: 165, protein: 31, gramm_pro_portion: 100 },
    { name: "Rindersteak", kcal: 250, protein: 26, gramm_pro_portion: 100 },
    { name: "Bratwurst", kcal: 320, protein: 13, gramm_pro_portion: 100 },
    { name: "Cervelat", kcal: 390, protein: 12, gramm_pro_portion: 100 },
    { name: "Leberkäse", kcal: 300, protein: 14, gramm_pro_portion: 100 },
    { name: "Hackfleisch Rind gebraten", kcal: 270, protein: 26, gramm_pro_portion: 100 },
    { name: "Hackfleisch Lamm gebraten", kcal: 290, protein: 25, gramm_pro_portion: 100 },
    { name: "Lachs gebraten", kcal: 208, protein: 20, gramm_pro_portion: 100 },
    { name: "Thunfisch in Wasser", kcal: 132, protein: 29, gramm_pro_portion: 100 },
    { name: "Sardinen in Öl", kcal: 208, protein: 25, gramm_pro_portion: 100 },
    { name: "Hähnchenschenkel mit Haut, gebraten", kcal: 220, protein: 25, gramm_pro_portion: 100 },
    { name: "Lammkotelett gebraten", kcal: 270, protein: 23, gramm_pro_portion: 100 },

    // Beilagen
    { name: "Reis gekocht", kcal: 130, protein: 2.4, gramm_pro_portion: 100 },
    { name: "Nudeln gekocht", kcal: 130, protein: 5, gramm_pro_portion: 100 },
    { name: "Kartoffel gekocht", kcal: 86, protein: 2, gramm_pro_portion: 100 },
    { name: "Pommes", kcal: 312, protein: 3.4, gramm_pro_portion: 100 },
    { name: "Gnocchi", kcal: 150, protein: 3, gramm_pro_portion: 100 },

    // Fertiggerichte / Fast Food
    { name: "Pizza Margherita", kcal: 260, protein: 11, gramm_pro_portion: 100 },
    { name: "Döner Kebab (Fleisch mit Brot, Salat, Sauce)", kcal: 650, protein: 30, gramm_pro_portion: 300 }, // ca. 1 Döner
    { name: "Burger (mit Käse)", kcal: 500, protein: 25, gramm_pro_portion: 200 }, // ca. 1 Burger
    { name: "Lahmacun (Türkische Pizza)", kcal: 200, protein: 10, gramm_pro_portion: 100 },
    { name: "Köfte (Fleischbällchen, gebraten)", kcal: 250, protein: 20, gramm_pro_portion: 100 },
    { name: "Börek (Käsefüllung)", kcal: 350, protein: 12, gramm_pro_portion: 100 }, // Türkisches Gebäck
    { name: "Pide (mit Hackfleischfüllung)", kcal: 280, protein: 15, gramm_pro_portion: 100 }, // Türkisches Fladenbrot
    { name: "Iskender Kebab (Fleisch mit Brot, Joghurt, Tomatensauce)", kcal: 800, protein: 40, gramm_pro_portion: 400 }, // ca. 1 Portion

    // Gemüse
    { name: "Tomate", kcal: 18, protein: 1, gramm_pro_portion: 100 },
    { name: "Karotte", kcal: 41, protein: 1, gramm_pro_portion: 100 },
    { name: "Spinat gekocht", kcal: 23, protein: 3, gramm_pro_portion: 100 },
    { name: "Brokkoli gekocht", kcal: 35, protein: 2.8, gramm_pro_portion: 100 },
    { name: "Zucchini", kcal: 17, protein: 1.2, gramm_pro_portion: 100 },
    { name: "Aubergine", kcal: 25, protein: 1, gramm_pro_portion: 100 },
    { name: "Paprika (rot)", kcal: 31, protein: 1, gramm_pro_portion: 100 },
    { name: "Gurke", kcal: 15, protein: 0.7, gramm_pro_portion: 100 },
    { name: "Zwiebel", kcal: 40, protein: 1.1, gramm_pro_portion: 100 },
    { name: "Knoblauch", kcal: 149, protein: 6.4, gramm_pro_portion: 100 },

    // Obst
    { name: "Apfel", kcal: 52, protein: 0.3, gramm_pro_portion: 100 },
    { name: "Banane", kcal: 89, protein: 1.1, gramm_pro_portion: 100 },
    { name: "Birne", kcal: 57, protein: 0.4, gramm_pro_portion: 100 },
    { name: "Blaubeeren", kcal: 57, protein: 0.7, gramm_pro_portion: 100 },
    { name: "Erdbeeren", kcal: 32, protein: 0.8, gramm_pro_portion: 100 },
    { name: "Trauben", kcal: 69, protein: 0.7, gramm_pro_portion: 100 },
    { name: "Ananas", kcal: 50, protein: 0.5, gramm_pro_portion: 100 },
    { name: "Mango", kcal: 60, protein: 0.8, gramm_pro_portion: 100 },
    { name: "Kiwi", kcal: 41, protein: 0.8, gramm_pro_portion: 100 },
    { name: "Orange", kcal: 47, protein: 0.9, gramm_pro_portion: 100 },
    { name: "Wassermelone", kcal: 30, protein: 0.6, gramm_pro_portion: 100 },
    { name: "Kirschen", kcal: 63, protein: 1.1, gramm_pro_portion: 100 },

    // Hülsenfrüchte & Vegane Alternativen
    { name: "Falafel", kcal: 333, protein: 13, gramm_pro_portion: 100 },
    { name: "Hummus", kcal: 240, protein: 8, gramm_pro_portion: 100 },
    { name: "Tofu natur", kcal: 145, protein: 15, gramm_pro_portion: 100 },
    { name: "Tempeh", kcal: 192, protein: 20, gramm_pro_portion: 100 },
    { name: "Edamame", kcal: 122, protein: 11, gramm_pro_portion: 100 },

    // Nüsse & Samen
    { name: "Avocado", kcal: 160, protein: 2, gramm_pro_portion: 100 },
    { name: "Sonnenblumenkerne", kcal: 585, protein: 20, gramm_pro_portion: 100 },
    { name: "Mandeln", kcal: 576, protein: 21, gramm_pro_portion: 100 },
    { name: "Cashewkerne", kcal: 553, protein: 18, gramm_pro_portion: 100 },
    { name: "Walnüsse", kcal: 654, protein: 15, gramm_pro_portion: 100 },
    { name: "Erdnussbutter", kcal: 588, protein: 25, gramm_pro_portion: 100 },
    { name: "Chiasamen", kcal: 486, protein: 17, gramm_pro_portion: 100 },

    // Proteinprodukte
    { name: "Proteinriegel Schoko", kcal: 350, protein: 20, gramm_pro_portion: 50 }, // ca. 1 Riegel
    { name: "Proteinshake Vanille", kcal: 100, protein: 20, gramm_pro_portion: 250 }, // ca. 1 Shake
    { name: "Whey Protein Pulver", kcal: 400, protein: 80, gramm_pro_portion: 100 },

    // Getränke
    { name: "Cola", kcal: 42, protein: 0, gramm_pro_portion: 100 },
    { name: "Fanta", kcal: 48, protein: 0, gramm_pro_portion: 100 },
    { name: "Red Bull", kcal: 45, protein: 0, gramm_pro_portion: 100 },
    { name: "Rivella Rot", kcal: 34, protein: 0, gramm_pro_portion: 100 },
    { name: "Wasser", kcal: 0, protein: 0, gramm_pro_portion: 100 },
    { name: "Kaffee schwarz", kcal: 2, protein: 0.1, gramm_pro_portion: 100 },
    { name: "Eistee Pfirsich", kcal: 28, protein: 0, gramm_pro_portion: 100 },
    { name: "Smoothie Erdbeer", kcal: 45, protein: 0.5, gramm_pro_portion: 100 },
    { name: "Fruchtsaft Orange", kcal: 46, protein: 0.7, gramm_pro_portion: 100 },
    { name: "Türkischer Apfeltee (gezuckert)", kcal: 30, protein: 0, gramm_pro_portion: 100 }, // Türkischer Tee
    { name: "Türkischer Schwarztee (ungesüsst)", kcal: 1, protein: 0.1, gramm_pro_portion: 100 },

    // Süssigkeiten & Snacks
    { name: "Zweifel Chips Paprika", kcal: 540, protein: 6, gramm_pro_portion: 100 },
    { name: "Zweifel Chips Nature", kcal: 520, protein: 6, gramm_pro_portion: 100 },
    { name: "Milka Schokolade", kcal: 530, protein: 6, gramm_pro_portion: 100 },
    { name: "Lindt Schokolade (Vollmilch)", kcal: 550, protein: 5, gramm_pro_portion: 100 },
    { name: "Oreo Keks", kcal: 480, protein: 4.9, gramm_pro_portion: 100 },
    { name: "Twix", kcal: 483, protein: 4, gramm_pro_portion: 100 },
    { name: "Nutella", kcal: 539, protein: 6, gramm_pro_portion: 100 },
    { name: "Haribo Goldbären", kcal: 343, protein: 6.9, gramm_pro_portion: 100 },
    { name: "Baklava (Türkisches Gebäck)", kcal: 450, protein: 6, gramm_pro_portion: 100 }, // Türkisches Dessert
    { name: "Lokum (Türkischer Honig)", kcal: 380, protein: 0.5, gramm_pro_portion: 100 }, // Türkische Süssigkeit

    // Türkische Gerichte (Beispiele für eine durchschnittliche Portion)
    { name: "Mercimek Çorbası (Linsensuppe)", kcal: 120, protein: 7, gramm_pro_portion: 250 }, // ca. 1 Teller
    { name: "Ezogelin Çorbası (Scharfe Linsensuppe)", kcal: 130, protein: 7, gramm_pro_portion: 250 }, // ca. 1 Teller
    { name: "Menemen (Türkisches Rührei mit Tomaten und Paprika)", kcal: 180, protein: 10, gramm_pro_portion: 200 }, // ca. 1 Portion
    { name: "Kuru Fasulye (Weisse Bohnen Eintopf mit Fleisch)", kcal: 250, protein: 15, gramm_pro_portion: 300 }, // ca. 1 Portion
    { name: "Imam Bayıldı (Gefüllte Aubergine)", kcal: 180, protein: 5, gramm_pro_portion: 250 }, // ca. 1 Portion
    { name: "Yaprak Sarma (Weinblätter gefüllt)", kcal: 160, protein: 4, gramm_pro_portion: 150 }, // ca. 5-6 Stück
    { name: "Hünkar Beğendi (Lamm mit Auberginenpüree)", kcal: 300, protein: 25, gramm_pro_portion: 300 }, // ca. 1 Portion
    { name: "Sigara Böreği (Kleine Käse-Zigarren)", kcal: 280, protein: 10, gramm_pro_portion: 100 }, // ca. 3-4 Stück
    { name: "Çiğ Köfte (Veganes Bulgur-Gericht)", kcal: 190, protein: 6, gramm_pro_portion: 150 }, // ca. 1 Portion
    { name: "Adana Kebab (Scharfer Hackfleischspiess)", kcal: 280, protein: 22, gramm_pro_portion: 150 }, // ca. 1 Spiess
    { name: "Urfa Kebab (Milder Hackfleischspiess)", kcal: 270, protein: 21, gramm_pro_portion: 150 }, // ca. 1 Spiess
    { name: "Şiş Kebap (Lammspiess)", kcal: 260, protein: 25, gramm_pro_portion: 150 }, // ca. 1 Spiess
    { name: "Tavuk Şiş (Hähnchenspiess)", kcal: 190, protein: 28, gramm_pro_portion: 150 }, // ca. 1 Spiess
    { name: "Güveç (Türkischer Gemüseeintopf mit Fleisch)", kcal: 220, protein: 18, gramm_pro_portion: 300 }, // ca. 1 Portion
    { name: "Mantı (Türkische Teigtaschen mit Joghurt und Knoblauch)", kcal: 280, protein: 12, gramm_pro_portion: 200 }, // ca. 1 Portion
    { name: "Balık Ekmek (Fischbrot)", kcal: 350, protein: 20, gramm_pro_portion: 250 }, // ca. 1 Sandwich
    { name: "Cacık (Türkischer Joghurt mit Gurke und Knoblauch)", kcal: 70, protein: 3, gramm_pro_portion: 150 }, // ca. 1 Portion
    { name: "Ezme Salatası (Scharfer Tomaten-Paprika-Salat)", kcal: 80, protein: 2, gramm_pro_portion: 100 }, // ca. 1 Portion
    { name: "Gavurdağı Salatası (Walnuss-Tomaten-Salat)", kcal: 120, protein: 3, gramm_pro_portion: 150 } // ca. 1 Portion
];

// Datenstruktur:
// personen: [{ id: 'uuid', name: 'Max', zielKcal: 2000, zielProtein: 150, dailyData: { 'YYYY-MM-DD': { meals: [], notes: '' } } }]
let personen = JSON.parse(localStorage.getItem("personen")) || [];
let activePersonId = null; // Speichert die ID der aktiven Person
let currentDate = new Date(); // Startet mit dem heutigen Datum

// --- Hilfsfunktionen ---
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function formatDate(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function getActivePerson() {
    return personen.find(p => p.id === activePersonId);
}

function getDailyData(person, dateStr) {
    if (!person.dailyData) {
        person.dailyData = {};
    }
    if (!person.dailyData[dateStr]) {
        person.dailyData[dateStr] = { meals: [], notes: '' };
    }
    return person.dailyData[dateStr];
}

function saveData() {
    localStorage.setItem("personen", JSON.stringify(personen));
    if (activePersonId) {
        localStorage.setItem('lastActivePersonId', activePersonId); // Speichere die zuletzt aktive Person
    } else {
        localStorage.removeItem('lastActivePersonId'); // Entferne, wenn keine Person aktiv
    }
}

// --- Migrationslogik für alte Daten ohne ID ---
function migrateOldData() {
    let needsSave = false;
    personen.forEach(person => {
        if (!person.id) {
            person.id = generateUUID();
            needsSave = true;
        }
        if (!person.dailyData || typeof person.dailyData !== 'object' || Array.isArray(person.dailyData)) {
            const oldMeals = Array.isArray(person.meals) ? person.meals : [];
            person.dailyData = {}; // Initialisiere als leeres Objekt
            // Versuche, alte Mahlzeiten zu migrieren, wenn sie existieren
            // Diese Logik geht davon aus, dass "meals" direkt unter der Person gespeichert war
            // und migriert sie zum heutigen Tag, wenn keine spezifischen Tagesdaten existierten.
            // Dies ist eine Vereinfachung. Ideal wäre es, wenn alte Daten bereits Tageszuordnungen hätten.
            if (oldMeals.length > 0) {
                const today = formatDate(new Date());
                person.dailyData[today] = { meals: oldMeals, notes: person.notes || '' }; // Auch alte Notizen migrieren, falls vorhanden
            }
            delete person.meals;
            delete person.notes; // Alte Top-Level Notizen entfernen
            needsSave = true;
        }
    });

    if (needsSave) {
        console.log("Datenmigration abgeschlossen: Alten Personen IDs zugewiesen und Datenstruktur aktualisiert.");
        saveData();
    }
}


// --- Personen-Verwaltung ---
function addPerson() {
    const nameInput = document.getElementById("personName");
    const kcalInput = document.getElementById("zielKcal");
    const proteinInput = document.getElementById("zielProtein");

    const name = nameInput.value.trim();
    const kcal = parseInt(kcalInput.value);
    const protein = parseInt(proteinInput.value);

    if (!name || isNaN(kcal) || kcal <= 0 || isNaN(protein) || protein < 0) {
        alert("Bitte gib einen gültigen Namen und positive Zielwerte für Kalorien und Protein ein.");
        return;
    }

    const person = {
        id: generateUUID(),
        name,
        zielKcal: kcal,
        zielProtein: protein,
        dailyData: {}
    };
    personen.push(person);

    saveData();
    updatePersonList();
    nameInput.value = "";
    kcalInput.value = "";
    proteinInput.value = "";

    if (personen.length === 1 || !activePersonId) {
        activePersonId = personen[personen.length - 1].id; // Die neu hinzugefügte Person aktiv setzen
        localStorage.setItem('lastActivePersonId', activePersonId);
    }
    loadDay(formatDate(currentDate));
    updatePersonList(); // Stellt sicher, dass die neue Person als aktiv markiert wird
}

function deletePerson(idToDelete) {
    const personToDelete = personen.find(p => p.id === idToDelete);
    if (!personToDelete) return;

    if (confirm(`Möchtest du das Profil "${personToDelete.name}" wirklich löschen? Alle zugehörigen Daten gehen verloren.`)) {
        personen = personen.filter(p => p.id !== idToDelete);
        saveData();

        if (activePersonId === idToDelete) {
            if (personen.length > 0) {
                activePersonId = personen[0].id;
                localStorage.setItem('lastActivePersonId', activePersonId);
            } else {
                activePersonId = null;
                localStorage.removeItem('lastActivePersonId');
            }
        }
        updatePersonList();
        loadDay(formatDate(currentDate));
    }
}

function changeActivePerson(newPersonId) {
    if (activePersonId !== newPersonId) {
        activePersonId = newPersonId;
        localStorage.setItem('lastActivePersonId', newPersonId); // Speichert die ID der aktiven Person
        updatePersonList();
        loadDay(formatDate(currentDate));
    }
}

function updatePersonList() {
    const personListContainer = document.getElementById("activePersonList");
    personListContainer.innerHTML = "";

    if (personen.length === 0) {
        personListContainer.innerHTML = "<li class='info-message'>Noch keine Profile hinzugefügt.</li>";
        activePersonId = null;
        localStorage.removeItem('lastActivePersonId');
        updateMealLog();
        document.getElementById("dailyNotes").value = '';
        return;
    }

    personen.forEach(p => {
        const li = document.createElement("li");
        li.className = "person-item";
        if (p.id === activePersonId) {
            li.classList.add("active");
        }
        li.onclick = () => changeActivePerson(p.id);

        li.innerHTML = `
            <span class="person-name">${p.name}</span>
            <button onclick="event.stopPropagation(); deletePerson('${p.id}')" class="btn btn-delete btn-sm" title="Profil löschen"><i class="fas fa-trash-alt"></i></button>
        `;
        personListContainer.appendChild(li);
    });

    const lastActiveId = localStorage.getItem('lastActivePersonId');
    if (personen.length > 0) {
        if (lastActiveId && personen.some(p => p.id === lastActiveId)) {
            activePersonId = lastActiveId;
        } else if (!activePersonId || !personen.some(p => p.id === activePersonId)) {
            activePersonId = personen[0].id;
            localStorage.setItem('lastActivePersonId', activePersonId);
        }
    } else {
        activePersonId = null;
        localStorage.removeItem('lastActivePersonId');
    }

    loadDay(formatDate(currentDate));
}

// --- Tages-Verwaltung ---
function loadDay(dateStr) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
        console.error("Ungültiges Datumsformat:", dateStr);
        dateStr = formatDate(new Date()); // Fallback auf heute
    }
    currentDate = new Date(dateStr + "T00:00:00"); // Zeitkomponente hinzufügen, um Zeitzonenprobleme zu vermeiden
    document.getElementById("currentDateInput").value = dateStr;

    const activePerson = getActivePerson();
    if (activePerson) {
        const dailyData = getDailyData(activePerson, dateStr);
        document.getElementById("dailyNotes").value = dailyData.notes || '';
    } else {
        document.getElementById("dailyNotes").value = '';
    }
    updateMealLog();
}

function saveDailyNotes() {
    const activePerson = getActivePerson();
    if (activePerson) {
        const dateStr = formatDate(currentDate);
        const dailyData = getDailyData(activePerson, dateStr);
        dailyData.notes = document.getElementById("dailyNotes").value;
        saveData();
    }
}

function prevDay() {
    currentDate.setDate(currentDate.getDate() - 1);
    loadDay(formatDate(currentDate));
}

function nextDay() {
    currentDate.setDate(currentDate.getDate() + 1);
    loadDay(formatDate(currentDate));
}

// --- Mahlzeiten-Verwaltung ---
function addMeal() {
    const activePerson = getActivePerson();
    if (!activePerson) {
        alert("Bitte zuerst ein Profil auswählen!");
        return;
    }

    const nameInput = document.getElementById("mealName");
    const kcalInput = document.getElementById("mealKcal");
    const proteinInput = document.getElementById("mealProtein");

    const name = nameInput.value.trim();
    const kcal = parseInt(kcalInput.value);
    const protein = parseInt(proteinInput.value);

    if (!name || isNaN(kcal) || kcal < 0 || isNaN(protein) || protein < 0) {
        alert("Bitte alle Felder für die Mahlzeit mit gültigen Werten ausfüllen!");
        return;
    }

    const dateStr = formatDate(currentDate);
    const dailyData = getDailyData(activePerson, dateStr);
    dailyData.meals.push({ name, kcal, protein });
    saveData();

    nameInput.value = "";
    kcalInput.value = "";
    proteinInput.value = "";
    updateMealLog();
}

function deleteMeal(mealIndex) {
    const activePerson = getActivePerson();
    if (!activePerson) return;

    const dateStr = formatDate(currentDate);
    const dailyData = getDailyData(activePerson, dateStr);

    if (mealIndex < 0 || mealIndex >= dailyData.meals.length) {
        console.error("Ungültiger Mahlzeiten-Index:", mealIndex);
        return;
    }

    const mealToDelete = dailyData.meals[mealIndex];
    if (confirm(`Möchtest du "${mealToDelete.name}" wirklich löschen?`)) {
        dailyData.meals.splice(mealIndex, 1);
        saveData();
        updateMealLog();
    }
}

function updateMealLog() {
    const container = document.getElementById("mealLog");
    const activePerson = getActivePerson();

    if (!activePerson) {
        container.innerHTML = "<p class='info-message'><i>Kein Profil ausgewählt. Bitte füge ein Profil hinzu oder wähle eines aus.</i></p>";
        return;
    }

    const dateStr = formatDate(currentDate);
    const dailyData = getDailyData(activePerson, dateStr);

    let html = `<h3>Mahlzeiten für ${activePerson.name} am ${currentDate.toLocaleDateString('de-DE', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</h3><ul>`;
    let sumKcal = 0;
    let sumProtein = 0;

    if (dailyData.meals.length === 0) {
        html += "<li class='no-meals'>Noch keine Mahlzeiten für diesen Tag hinzugefügt.</li>";
    } else {
        dailyData.meals.forEach((m, index) => {
            html += `<li class="meal-item">
                        <span>${m.name}</span>
                        <span>${m.kcal} kcal / ${m.protein}g P</span>
                        <button onclick="deleteMeal(${index})" class="btn btn-delete btn-sm" title="Mahlzeit löschen"><i class="fas fa-times"></i></button>
                    </li>`;
            sumKcal += m.kcal;
            sumProtein += m.protein;
        });
    }
    html += `</ul>`;

    if (activePerson.zielKcal > 0 || activePerson.zielProtein > 0) {
        html += `<div class="summary">
                     <p><strong>Gesamt:</strong> <span>${sumKcal} kcal / ${sumProtein}g Protein</span></p>`;

        const remainingKcal = activePerson.zielKcal - sumKcal;
        const kcalColor = remainingKcal < 0 ? '#dc3545' : '#28a745';
        html += `<p class="status-kcal"><strong>Ziel Kalorien:</strong> <span style="color: ${kcalColor};">${remainingKcal} kcal übrig</span></p>`;

        const remainingProtein = activePerson.zielProtein - sumProtein;
        const proteinColor = remainingProtein < 0 && activePerson.zielProtein > 0 ? '#28a745' : '#dc3545';
        const proteinText = activePerson.zielProtein > 0 ? `${remainingProtein}g ${remainingProtein < 0 ? 'mehr erreicht' : 'bis Ziel'}` : `${remainingProtein}g`;
        html += `<p class="status-protein"><strong>Ziel Protein:</strong> <span style="color: ${proteinColor};">${proteinText}</span></p>`;
        html += `</div>`;
    } else {
        html += `<div class="summary">
                     <p><strong>Gesamt:</strong> <span>${sumKcal} kcal / ${sumProtein}g Protein</span></p>
                     <p class='info-message' style='font-size:0.8em; text-align:left; padding:5px 0;'><i>Keine Ziele für Kalorien/Protein definiert.</i></p>
                  </div>`;
    }

    container.innerHTML = html;
}

// --- Suche & Autovervollständigung ---
function findLocalProduct(query) {
    query = query.toLowerCase();
    const exactMatch = lebensmittelDatenbank.find(prod => prod.name.toLowerCase() === query);
    if (exactMatch) return exactMatch;

    const startsWithMatch = lebensmittelDatenbank.find(prod => prod.name.toLowerCase().startsWith(query));
    if (startsWithMatch) return startsWithMatch;

    return lebensmittelDatenbank.find(prod => prod.name.toLowerCase().includes(query));
}

async function searchProduct() {
    const query = document.getElementById("productSearch").value.trim();
    const searchResultDiv = document.getElementById("searchResult");
    const autocompleteList = document.getElementById("autocompleteList");
    autocompleteList.style.display = "none";

    if (!query) {
        searchResultDiv.innerHTML = "<p class='info-message'>Bitte gib ein Produkt ein, um zu suchen.</p>";
        return;
    }

    const lokal = findLocalProduct(query);
    if (lokal) {
        searchResultDiv.innerHTML = `
            <div class="product-item local-product">
                <strong>${lokal.name}</strong>
                <span>${lokal.kcal} kcal / ${lokal.protein}g Protein (pro ${lokal.gramm_pro_portion || 100}g)</span>
                <div class="input-group">
                    <input type="number" id="customAmountLocal" placeholder="Menge (g)" value="${lokal.gramm_pro_portion || 100}" aria-label="Menge in Gramm für lokales Produkt">
                    <button onclick="useProduct('${lokal.name}', ${lokal.kcal}, ${lokal.protein}, 'customAmountLocal', ${lokal.gramm_pro_portion || 100})" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Hinzufügen</button>
                </div>
            </div>
        `;
        return;
    }

    searchResultDiv.innerHTML = "<p class='loading-message'><i class='fas fa-spinner fa-spin'></i> Suche über Open Food Facts...</p>";

    try {
        const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=5&lc=de`);
        const data = await response.json();

        if (!data.products || data.products.length === 0) {
            searchResultDiv.innerHTML = "<p class='error-message'><i class='fas fa-exclamation-triangle'></i> Keine passenden Produkte online gefunden.</p>";
            return;
        }

        let html = "<h4>Suchergebnisse (Open Food Facts):</h4>";
        data.products.forEach((product, i) => {
            const name = product.product_name_de || product.product_name || "Unbekanntes Produkt";
            const kcal = product.nutriments["energy-kcal_100g"] || product.nutriments["energy-kcal_value"] ;
            const protein = product.nutriments["proteins_100g"] || product.nutriments["proteins_value"];

            if (kcal != null && protein != null) {
                html += `
                    <div class="product-item external-product">
                        <strong>${name}</strong>
                        <span>${parseFloat(kcal).toFixed(1)} kcal / ${parseFloat(protein).toFixed(1)}g Protein (pro 100g)</span>
                        <div class="input-group">
                            <input type="number" id="amount-${i}" placeholder="Menge (g)" value="100" aria-label="Menge in Gramm für ${name}">
                            <button onclick="useProduct('${name.replace(/'/g, "\\'")}', ${kcal}, ${protein}, 'amount-${i}', 100)" class="btn btn-secondary btn-sm"><i class="fas fa-plus"></i> Hinzufügen</button>
                        </div>
                    </div>
                `;
            }
        });
        if (html === "<h4>Suchergebnisse (Open Food Facts):</h4>") {
            searchResultDiv.innerHTML = "<p class='info-message'><i class='fas fa-info-circle'></i> Keine Produkte mit vollständigen Nährwertangaben online gefunden.</p>";
        } else {
            searchResultDiv.innerHTML = html;
        }

    } catch (err) {
        console.error("Fehler beim Abrufen von Open Food Facts:", err);
        searchResultDiv.innerHTML = "<p class='error-message'><i class='fas fa-exclamation-circle'></i> Fehler bei der Online-Suche. Bitte versuche es später erneut.</p>";
    }
}


function useProduct(name, kcalPerBase, proteinPerBase, inputId, baseAmount = 100) {
    const mengeInput = document.getElementById(inputId);
    const menge = parseFloat(mengeInput.value);

    if (isNaN(menge) || menge <= 0) {
        alert("Bitte gib eine gültige, positive Menge an.");
        mengeInput.focus();
        return;
    }

    const kcal = (kcalPerBase / baseAmount) * menge;
    const protein = (proteinPerBase / baseAmount) * menge;

    const activePerson = getActivePerson();
    if (!activePerson) {
        alert("Bitte zuerst ein Profil auswählen!");
        return;
    }

    const dateStr = formatDate(currentDate);
    const dailyData = getDailyData(activePerson, dateStr);

    dailyData.meals.push({
        name: `${name} (${menge}g)`,
        kcal: Math.round(kcal),
        protein: Math.round(protein * 10) / 10
    });

    saveData();
    updateMealLog();
    document.getElementById("searchResult").innerHTML = `<p class='success-message' style='text-align:center; color:green;'><i class='fas fa-check-circle'></i> ${name} (${menge}g) hinzugefügt!</p>`;
    document.getElementById("productSearch").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    migrateOldData();

    const lastActiveId = localStorage.getItem('lastActivePersonId');
    if (personen.length > 0) {
        if (lastActiveId && personen.some(p => p.id === lastActiveId)) {
            activePersonId = lastActiveId;
        } else {
            activePersonId = personen[0].id;
            localStorage.setItem('lastActivePersonId', activePersonId);
        }
    } else {
        activePersonId = null;
    }

    updatePersonList();
    loadDay(formatDate(currentDate));

    const productSearchInput = document.getElementById("productSearch");
    const autocompleteList = document.getElementById("autocompleteList");
    let focusedAutocompleteItemIndex = -1;

    productSearchInput.addEventListener("input", () => {
        const val = productSearchInput.value.toLowerCase();
        autocompleteList.innerHTML = "";
        focusedAutocompleteItemIndex = -1;

        if (!val) {
            autocompleteList.style.display = "none";
            return;
        }

        const matches = lebensmittelDatenbank
            .filter(item => item.name.toLowerCase().includes(val))
            .slice(0, 7);

        if (matches.length > 0) {
            matches.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.name;
                li.tabIndex = -1;
                li.addEventListener("click", () => {
                    productSearchInput.value = item.name;
                    autocompleteList.style.display = "none";
                    searchProduct();
                });
                li.addEventListener("mouseenter", () => {
                });
                autocompleteList.appendChild(li);
            });
            autocompleteList.style.display = "block";
        } else {
            autocompleteList.style.display = "none";
        }
    });

    productSearchInput.addEventListener("keydown", (e) => {
        const items = autocompleteList.querySelectorAll('li');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusedAutocompleteItemIndex = (focusedAutocompleteItemIndex + 1) % items.length;
            items[focusedAutocompleteItemIndex].focus();
            items.forEach((item, idx) => item.classList.toggle('selected', idx === focusedAutocompleteItemIndex));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusedAutocompleteItemIndex = (focusedAutocompleteItemIndex - 1 + items.length) % items.length;
            items[focusedAutocompleteItemIndex].focus();
            items.forEach((item, idx) => item.classList.toggle('selected', idx === focusedAutocompleteItemIndex));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (focusedAutocompleteItemIndex > -1 && items[focusedAutocompleteItemIndex]) {
                items[focusedAutocompleteItemIndex].click();
            } else {
                searchProduct();
            }
            autocompleteList.style.display = "none";
        } else if (e.key === 'Escape') {
            autocompleteList.style.display = "none";
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target !== productSearchInput && e.target.parentNode !== autocompleteList) {
            autocompleteList.style.display = "none";
        }
    });
});


// ✅ HIER IST DIE KORREKTE CHATBOT-FUNKTION, DIE DEN SERVER KONTAKTIERT
async function sendMessage() {
    const input = document.getElementById("chatInput");
    const output = document.getElementById("chatOutput");

    const message = input.value.trim();
    if (!message) return;

    const userMessageDiv = document.createElement('p');
    userMessageDiv.innerHTML = `<strong>Du:</strong> ${message}`;
    userMessageDiv.classList.add('chat-message', 'user-message');
    output.appendChild(userMessageDiv);
    input.value = "";
    output.scrollTop = output.scrollHeight;

    const loadingDiv = document.createElement('p');
    loadingDiv.className = 'loading-message bot-message';
    loadingDiv.innerHTML = `<strong>Bot:</strong> <i class='fas fa-spinner fa-spin'></i> Tippt...`;
    output.appendChild(loadingDiv);
    output.scrollTop = output.scrollHeight;

    try {
        // Anfrage an den lokalen Backend-Server senden
        const res = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }) // Die Nachricht als JSON senden
        });

        if (!res.ok) { // Fehlerbehandlung für HTTP-Fehler
            throw new Error(`HTTP-Fehler! Status: ${res.status}`);
        }

        const data = await res.json();
        const reply = data.reply || "Keine schlüssige Antwort erhalten.";

        // Lade-Nachricht entfernen
        output.removeChild(loadingDiv);

        // Antwort vom Bot anzeigen
        const botMessageDiv = document.createElement('p');
        const formattedReply = reply.replace(/\n/g, '<br>');
        botMessageDiv.innerHTML = `<strong>Bot:</strong> ${formattedReply}`;
        botMessageDiv.classList.add('chat-message', 'bot-message');
        output.appendChild(botMessageDiv);

    } catch (err) {
        console.error("Chatbot Fehler:", err);
        if (output.contains(loadingDiv)) {
            output.removeChild(loadingDiv);
        }
        // Fehler-Nachricht im Chat anzeigen
        const errorMessageDiv = document.createElement('p');
        errorMessageDiv.classList.add('chat-message', 'error-message', 'bot-message');
        errorMessageDiv.innerHTML = `<strong>Bot:</strong> <span>Fehler: Konnte keine Verbindung zum Assistenten herstellen. (Läuft der Server auf Port 3000?)</span>`;
        output.appendChild(errorMessageDiv);
    }

    output.scrollTop = output.scrollHeight;
}

// Funktionen global sichtbar machen
window.sendMessage = sendMessage;
window.addPerson = addPerson;
window.deletePerson = deletePerson;
window.changeActivePerson = changeActivePerson;
window.addMeal = addMeal;
window.deleteMeal = deleteMeal;
window.searchProduct = searchProduct;
window.useProduct = useProduct;
window.loadDay = loadDay;
window.prevDay = prevDay;
window.nextDay = nextDay;
window.saveDailyNotes = saveDailyNotes;