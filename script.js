// Projelerimizi tutan ana dizi
const projeListesi = [
    {
        id: 1,
        baslik: "Hastane Randevu Sistemi",
        kategori: "web",
        aciklama: "JS ile geliştirilmiş randevu takip sistemi.",
        gorsel: "https://via.placeholder.com/300" // Buraya gerçek resim linki gelecek
    },
    {
        id: 2,
        baslik: "Kitap Takip Uygulaması",
        kategori: "web",
        aciklama: "Kütüphane yönetim paneli.",
        gorsel: "https://via.placeholder.com/300"
    },
    {
        id: 3,
        baslik: "Hava Durumu Mobil",
        kategori: "mobil",
        aciklama: "React Native ile mobil uygulama.",
        gorsel: "https://via.placeholder.com/300"
    },
    {
        id: 4,
        baslik: "E-Ticaret Arayüzü",
        kategori: "web",
        aciklama: "Tailwind CSS ile modern tasarım.",
        gorsel: "https://via.placeholder.com/300"
    },
    {
        id: 5,
        baslik: "Banka Uygulaması",
        kategori: "mobil",
        aciklama: "Güvenli mobil bankacılık arayüzü.",
        gorsel: "https://via.placeholder.com/300"
    }
];
// Proje listesi zaten üstte tanımlıydı...

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