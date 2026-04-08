// 1. GÖREV: GitHub Profil Bilgilerini Çekme (Dinamik Hakkımda)
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

// 2. GÖREV: Proje Verileri - 5 PROJE (Rubrik Gereği Tam Liste)
const projeListesi = [
    { 
        id: 1, 
        baslik: "Kargo Dağıtım Sistemi", 
        kategori: "web", 
        aciklama: "Django ve Python üniversite projem.", 
        link: "https://github.com/SefikMersinli", 
        gorsel: "img/kargo.jpg" 
    },
    { 
        id: 2, 
        baslik: "İHA-1 Kontrol Paneli", 
        kategori: "mobil", 
        aciklama: "Drone verilerini izleme arayüzü.", 
        link: "https://github.com/SefikMersinli", 
        gorsel: "img/iha.jpg" 
    },
    { 
        id: 3, 
        baslik: "Python Otomasyon", 
        kategori: "web", 
        aciklama: "Günlük Python scriptleri.", 
        link: "https://github.com/SefikMersinli", 
        gorsel: "img/otomasyon.png" 
    },
    { 
        id: 4, 
        baslik: "E-Ticaret Arayüzü", 
        kategori: "web", 
        aciklama: "Modern alışveriş sitesi tasarımı.", 
        link: "https://github.com/SefikMersinli", 
        gorsel: "img/kargo.jpg" 
    },
    { 
        id: 5, 
        baslik: "Hava Durumu Uygulaması", 
        kategori: "mobil", 
        aciklama: "Anlık veri çeken mobil uygulama.", 
        link: "https://github.com/SefikMersinli", 
        gorsel: "img/iha.jpg" 
    }
];

const projeAlani = document.getElementById("projeAlani");
const temaButonu = document.getElementById("temaDegistir");

// 3. GÖREV: Projeleri Listeleme (Tıklama Efekti ve Link Bağlantısı Dahil)
function projeleriGoster(liste) {
    projeAlani.innerHTML = liste.map(proje => `
        <div class="proje-karti" onclick="window.open('${proje.link}', '_blank')">
            <img src="${proje.gorsel}" alt="${proje.baslik}">
            <h3>${proje.baslik}</h3>
            <p>${proje.aciklama}</p>
            <span class="etiket">${proje.kategori}</span>
            <div class="tikla-ipucu">Projeyi Gör →</div>
        </div>
    `).join("");
}

// 4. GÖREV: Filtreleme Mantığı
function projeleriFiltrele(kategori) {
    if (kategori === "hepsi") {
        projeleriGoster(projeListesi);
    } else {
        const filtrelenmisProjeler = projeListesi.filter(p => p.kategori === kategori);
        projeleriGoster(filtrelenmisProjeler);
    }
}

// 5. GÖREV: Karanlık Mod Butonu Kontrolü
temaButonu.addEventListener("click", () => {
    document.body.classList.toggle("karanlik-tema");
    temaButonu.textContent = document.body.classList.contains("karanlik-tema") ? "Aydınlık Mod" : "Karanlık Mod";
});

// 6. GÖREV: Daktilo Efekti
const isim = "Sefik Mersinli - Dijital Portfolyo";
let index = 0;
function daktilo() {
    if (index < isim.length) {
        document.querySelector("h1").innerHTML += isim.charAt(index);
        index++;
        setTimeout(daktilo, 100);
    }
}

// BAŞLATICI KOMUTLAR
document.querySelector("h1").innerHTML = ""; // Sayfa açılınca h1'i temizle
daktilo(); // Daktiloyu başlat
githubBilgileriniGetir(); // Profil verilerini çek
projeleriGoster(projeListesi); // Projeleri ilk kez bas