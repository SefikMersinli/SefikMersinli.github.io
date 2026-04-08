// GitHub profil bilgilerini çekme fonksiyonu
async function githubBilgileriniGetir() {
    try {
        const cevap = await fetch('https://api.github.com/users/SefikMersinli');
        const veri = await cevap.json();
        
        // HTML'deki ilgili alanları dolduruyoruz
        document.getElementById("hakkimda").innerHTML = `
            <h2>Hakkımda</h2>
            <img src="${veri.avatar_url}" alt="${veri.name}" style="width:150px; border-radius:50%; border: 3px solid #f59e0b;">
            <p>${veri.bio || "Gümüşhane Üniversitesi Bilgisayar Programcılığı öğrencisi."}</p>
            <p><strong>Konum:</strong> ${veri.location || "Gümüşhane"}</p>
            <p><strong>Takipçi:</strong> ${veri.followers} | <strong>Repo Sayısı:</strong> ${veri.public_repos}</p>
        `;
    } catch (hata) {
        console.log("GitHub verisi çekilemedi:", hata);
    }
}
githubBilgileriniGetir();


// Projelerimizi tutan ana dizi
const projeListesi = [
    {
        id: 1,
        baslik: "Kargo Dağıtım Sistemi",
        kategori: "web",
        aciklama: "Django ve Python kullanılarak geliştirilmiş üniversite projem.",
        link: "https://github.com/SefikMersinli/kargo-dagitim", // Varsa gerçek linkini koy
        gorsel: "https://via.placeholder.com/300/1a1a1a/ffffff?text=Django+Projesi"
    },
    {
        id: 2,
        baslik: "İHA-1 Drone Kontrol Paneli",
        kategori: "mobil",
        aciklama: "İHA-1 sertifikalı pilot olarak drone verilerini izleme arayüzü.",
        link: "https://github.com/SefikMersinli",
        gorsel: "https://via.placeholder.com/300/1a1a1a/ffffff?text=Drone+Project"
    },
    {
        id: 3,
        baslik: "Python Otomasyon Araçları",
        kategori: "web",
        aciklama: "Günlük işleri kolaylaştıran Python scriptleri.",
        link: "https://github.com/SefikMersinli",
        gorsel: "https://via.placeholder.com/300/1a1a1a/ffffff?text=Python+Tools"
    }
];

const projeAlani = document.getElementById("projeAlani");
const temaButonu = document.getElementById("temaDegistir");

// 1. GÖREV: Projeleri Ekrana Basma (map metodu kullanımı)
function projeleriGoster(liste) {
    const htmlIcerigi = liste.map(proje => `
        <div class="proje-karti">
            <img src="${proje.gorsel}" alt="${proje.baslik}">
            <h3>${proje.baslik}</h3>
            <p>${proje.aciklama}</p>
            <span class="etiket">${proje.kategori}</span>
        </div>
    `).join("");
    
    projeAlani.innerHTML = htmlIcerigi;
}

// 2. GÖREV: Filtreleme (filter metodu kullanımı)
function projeleriFiltrele(kategori) {
    if (kategori === "hepsi") {
        projeleriGoster(projeListesi);
    } else {
        const filtrelenmisProjeler = projeListesi.filter(p => p.kategori === kategori);
        projeleriGoster(filtrelenmisProjeler);
    }
}

// 3. GÖREV: Karanlık Mod
temaButonu.addEventListener("click", () => {
    document.body.classList.toggle("karanlik-tema");
    if (document.body.classList.contains("karanlik-tema")) {
        temaButonu.textContent = "Aydınlık Mod";
    } else {
        temaButonu.textContent = "Karanlık Mod";
    }
});

// Sayfa ilk açıldığında tüm projeleri göster
projeleriGoster(projeListesi);

// 4. GÖREV: Daktilo Efekti (Ekstra Efekt 1)
const isim = "Sefik Mersinli - Dijital Portfolyo";
let index = 0;
function daktilo() {
    if (index < isim.length) {
        document.querySelector("h1").innerHTML += isim.charAt(index);
        index++;
        setTimeout(daktilo, 100);
    }
}
// h1'in içini boşaltıp daktiloyu başlatıyoruz
document.querySelector("h1").innerHTML = "";
daktilo();