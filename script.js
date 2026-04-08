// GitHub profil bilgilerini çekme
async function githubBilgileriniGetir() {
    try {
        const cevap = await fetch('https://api.github.com/users/SefikMersinli');
        const veri = await cevap.json();
        
        document.getElementById("github-profil").innerHTML = `
            <img src="${veri.avatar_url}" alt="${veri.name}" style="width:150px; border-radius:50%; border: 3px solid #f59e0b;">
            <p>${veri.bio || "Gümüşhane Üniversitesi Bilgisayar Programcılığı öğrencisi."}</p>
            <p><strong>Konum:</strong> ${veri.location || "Gümüşhane"}</p>
            <p><strong>Takipçi:</strong> ${veri.followers} | <strong>Repo Sayısı:</strong> ${veri.public_repos}</p>
        `;
    } catch (hata) {
        console.log("GitHub verisi çekilemedi:", hata);
    }
}

// Proje Verileri
const projeListesi = [
    { id: 1, baslik: "Kargo Dağıtım Sistemi", kategori: "web", aciklama: "Django ve Python üniversite projem.", link: "https://github.com/SefikMersinli", gorsel: "https://via.placeholder.com/300/1a1a1a/ffffff?text=Django+Projesi" },
    { id: 2, baslik: "İHA-1 Kontrol Paneli", kategori: "mobil", aciklama: "Drone verilerini izleme arayüzü.", link: "https://github.com/SefikMersinli", gorsel: "https://via.placeholder.com/300/1a1a1a/ffffff?text=Drone+Project" },
    { id: 3, baslik: "Python Otomasyon", kategori: "web", aciklama: "Günlük Python scriptleri.", link: "https://github.com/SefikMersinli", gorsel: "https://via.placeholder.com/300/1a1a1a/ffffff?text=Python+Tools" }
];

const projeAlani = document.getElementById("projeAlani");
const temaButonu = document.getElementById("temaDegistir");

function projeleriGoster(liste) {
    projeAlani.innerHTML = liste.map(proje => `
        <div class="proje-karti">
            <img src="${proje.gorsel}" alt="${proje.baslik}">
            <h3>${proje.baslik}</h3>
            <p>${proje.aciklama}</p>
            <span class="etiket">${proje.kategori}</span>
        </div>
    `).join("");
}

function projeleriFiltrele(kategori) {
    if (kategori === "hepsi") {
        projeleriGoster(projeListesi);
    } else {
        const filtrelenmisProjeler = projeListesi.filter(p => p.kategori === kategori);
        projeleriGoster(filtrelenmisProjeler);
    }
}

temaButonu.addEventListener("click", () => {
    document.body.classList.toggle("karanlik-tema");
    temaButonu.textContent = document.body.classList.contains("karanlik-tema") ? "Aydınlık Mod" : "Karanlık Mod";
});

// Daktilo Efekti
const isim = "Sefik Mersinli - Dijital Portfolyo";
let index = 0;
function daktilo() {
    if (index < isim.length) {
        document.querySelector("h1").innerHTML += isim.charAt(index);
        index++;
        setTimeout(daktilo, 100);
    }
}

// Başlatıcılar
document.querySelector("h1").innerHTML = "";
daktilo();
githubBilgileriniGetir();
projeleriGoster(projeListesi);