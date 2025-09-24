// Footer année auto
document.getElementById("year").textContent = new Date().getFullYear();

// Accordéon (Règlement)
const headers = document.querySelectorAll(".accordion-header");
headers.forEach(h => {
  h.addEventListener("click", () => {
    h.classList.toggle("active");
    const content = h.nextElementSibling;
    if (h.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "15px 20px";
    } else {
      content.style.maxHeight = null;
      content.style.padding = "0 20px";
    }
  });
});

// Patch Notes dynamiques
const patchData = [
  {
    version: "v1.3.0",
    date: "24/09/2025",
    changes: [
      "Ajout du choix et visuel des mappings",
      "Ajout du choix et visuel des interactions joueurs",
      "Mise à jour des permissions staff"
    ]
  },
  {
    version: "v1.2.0",
    date: "15/09/2025",
    changes: [
      "Optimisation des performances",
      "Nouvelles voitures d’auto-école"
    ]
  }
];
const patchList = document.getElementById("patch-list");
patchData.forEach(p => {
  const card = document.createElement("div");
  card.className = "patch-card";
  card.innerHTML = `<h3>${p.version} — ${p.date}</h3>` +
    p.changes.map(c => `<p>• ${c}</p>`).join("");
  patchList.appendChild(card);
});

// Staff dynamiques
const staffData = [
  { name: "Astro", role: "Fondateur" },
  { name: "Shadoow", role: "Développeur" },
  { name: "Maya", role: "Modératrice" }
];
const staffList = document.getElementById("staff-list");
staffData.forEach(s => {
  const card = document.createElement("div");
  card.className = "staff-card";
  card.innerHTML = `<h3>${s.name}</h3><p>${s.role}</p>`;
  staffList.appendChild(card);
});
