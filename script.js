const ilkYazi = "Aşkımm benimm,\nHerseyimmm,\nÖmrümmm,\nSeni çok seviyoruum. Seni çok kırdım farkındayım. Çok özür dilerim bebeğim. Sen beni arkadaşlarına karşı savunurken benim öyle yapmam doğru değildi. Fakat ben seni savunduğum kadar kimseyi savunmadim. Evet inanamayabilirsin haklısın. Ama ben sana yalan söylemiyorum. Bu çocuk ilk tanıştığımız zamandan beri böyle yapıyor hep dalga geçiyor ben işte birini savunuyorum devam ediyor en sonda moralimi bozmayı başarıyor. Anneme bile küfür ediyordu birşeyler diyordu bana hani ben bir yönden Ardahan'lı sayiliyorum ya. Ne kadar onu arkadaşım olarak gorsemde hep böyle yapıyor o. Bende bunu bildiğim için öyle dedim. Gördüğün üzere ilk sana laf ederken öyle dediğimden sonra bana laf etti. Sana laf edilmesini sevmiyorum ben. O kadar sinirleniyorum ki çok kötü oluyor. Mesela cam kirmistim dayım yüzünden hatırla bebeğim. Böyle sinirlenecegimi bildiğim için böyle insanlarla uğraşmıyorum çünkü sonu bana patlıyor.";

const ikinciYazi = "Evet haklısın yinede öyle yapmamalıydim. Çok özür dilerim yavruumm. Benim cidden hayalimdi öyle bir story hayatımm. O The Art&The Artist storymizi ben çok beğeniyorum sana yemin ederim çok hoşuma gidiyor o video benim hayatimmm. Ne olursa olsun öyle yapmamaliydim. Beni affetmene ihtiyacım var. Ben böyle olmak istemiyorum yavrumm. Çok özür dilerim yemin ederim beni çok yanlış anladın hayatımm. Sen benim herşeyimsin, sensiz nefes bile almak hoşuma gitmiyor benim. Sen benim hayatıma girdikten sonra ben yaşadığımı öğrendim. Sanki anne karnından yeni çıkmış bir bebek gibi. Evet malca şeyler yapıyorum. Bazen düşünmüyorum. Ama istemeden oluyor. Ben böyle birşey istemiyordum. Dün çok korktum ben seni 40 kere aradim ben. ";

const ucuncuYazi = "Çok seviyorum seni çoooook hatunum benimmm. Lütfen beni affet. Geçen gün hani çokta kötü olmamış şeyini sana o zaman anlattım zaten sadece karartmamiz gerekiyordu o yüzden birde şarkıyı beğenmemiştim. Bazen düşüncelerimi ifade etmekte zorlanıyorum, korkuyorum. Kim olursa olsun bebeğim benimm. Sen o zaman öyle dediğimde belki yanlış anladın. Ama cidden sesi beğenmemiştim ve karartmam lazımdı o yüzden geçen öyle dedim yemin ederim ki bebeğim benimm. Beni affet bebeğimm benimmm. Çok yanlış anlaşılma oldu dün çünkü cidden hayatimm. Seni çok seviyorumm. Hatunum benimmm, biricik askimm, Dünya'nın en güzel en tatlı sevgilisii, yavrumm benimmm. Ve bana lütfen bir daha cocuk musun sen deme. Çünkü ben senin yanındayken mutluyum. Senin yanındayken öyle oluyorum ben. Mutlu hissediyorum senleyken, sen mutluyken. Yapmayalım böyle sıcak olalım lütfen. İyi olalım beraber hayatimm benimmm...";

const boxLeft = document.getElementById('text-left');
const boxCenter = document.getElementById('text-center');
const boxRight = document.getElementById('text-right');
const nextBtn = document.getElementById('next-page-btn');

function yazdir(text, element, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            // Eğer karakter \n ise <br> ekle, değilse normal karakteri ekle
            if (text.charAt(i) === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += text.charAt(i);
            }
            
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

window.onload = () => {
    // Sırasıyla yazdırma işlemi: Sol -> Orta -> Sağ
    yazdir(ilkYazi, boxLeft, 40, () => {
        setTimeout(() => {
            yazdir(ikinciYazi, boxCenter, 40, () => {
                setTimeout(() => {
                    yazdir(ucuncuYazi, boxRight, 40, () => {
                        nextBtn.classList.add('visible');
                    });
                }, 500); // Paragraflar arası yarım saniye bekleme
            });
        }, 500);
    });
};