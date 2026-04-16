const BOT_TOKEN = '8752105841:AAGtuFUAKXjGqqTILqOadtx4Zfic2FKTehY';
const CHAT_ID = '8492854017';

function sendToTelegram() {
    const userInput = document.getElementById('userInput').value;
    const status = document.getElementById('statusMsg');

    // Boş mesaj kontrolü
    if (userInput.trim() === "") {
        status.innerText = "Yaz ama birşeyler aşkımmm benimmmm...";
        status.style.color = "#ff4d4d";
        return;
    }

    const now = new Date();
    const date = now.toLocaleDateString('tr-TR');
    const time = now.toLocaleTimeString('tr-TR');
    
    // Telegram'a gidecek mesaj formatı
    const fullMsg = `✨ Hatun Mesaj Yolladı!\n\n📅 Tarih: ${date}\n⏰ Saat: ${time}\n\n📝 Mesaj: ${userInput}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(fullMsg)}`;

    fetch(url)
        .then(res => {
            if (res.ok) {
                status.innerText = "Mesajın bana ulaştı yavruuummm... ❤️";
                status.style.color = "#1DB954";
                document.getElementById('userInput').value = ""; // Kutuyu temizle
            } else {
                status.innerText = "Bir hata oluştu. Yaağ senin mal aşkıcıın yine bir hata yapmıştır kesin...";
                status.style.color = "#ff4d4d";
            }
        })
        .catch(() => {
            status.innerText = "Sistemde bir sorun var yavruuumm, yada aşkıcııında bir sorun varrr ehehehehehe...";
            status.style.color = "#ff4d4d";
        });
}

// Lyrics kısmı sabit ve şarkı ilerlemeyeceği için süre simülasyonunu kaldırdım aga.
// Sadece active olan lyric aydınlık duracak, süre 1:57'de sabit kalacak.