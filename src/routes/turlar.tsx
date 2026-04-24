import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import torii from "@/assets/gallery-torii.jpg";
import tokyo from "@/assets/gallery-tokyo.jpg";
import kyoto from "@/assets/gallery-kyoto.jpg";
import food from "@/assets/gallery-food.jpg";
import fuji from "@/assets/gallery-fuji.jpg";
import sakura from "@/assets/gallery-sakura.jpg";

export const Route = createFileRoute("/turlar")({
  head: () => ({
    meta: [
      { title: "Hizmetler & Örnek Ücretler — Tokyo Türkçe Rehber" },
      { name: "description", content: "Tokyo'da Türkçe rehberlik, ilk gün desteği, yemek rotası ve kişiye özel gezi planları." },
      { property: "og:title", content: "Tokyo Türkçe Rehberlik Hizmetleri" },
      { property: "og:description", content: "Samimi, güvenilir ve öğrenci dostu Tokyo gezi hizmetleri." },
      { property: "og:image", content: tokyo },
      { name: "twitter:image", content: tokyo },
    ],
  }),
  component: ToursPage,
});

const tours = [
  {
    img: tokyo,
    city: "Tokyo",
    title: "İlk Gün Karşılama & Destek Paketi",
    duration: "Uçuş saatine göre planlanır",
    price: "10.000 Yen",
    desc: "Narita veya Haneda’da karşılama, şehre ulaşım, Suica/Pasmo, metro-tren kullanımı ve konaklama yerine kadar eşlik.",
  },
  {
    img: food,
    city: "Tokyo",
    title: "Yemek & Günlük Hayat Turu",
    duration: "4 saat",
    price: "¥5.500'den itibaren",
    desc: "Ramen, market kültürü, uygun restoranlar, kafe molası ve Japonya'da sipariş verme desteği.",
  },
  {
    img: torii,
    city: "Tokyo / çevre",
    title: "Kültür & Fotoğraf Rotası",
    duration: "5 saat",
    price: "¥6.500'den itibaren",
    desc: "Tapınak, sakin sokaklar, güzel fotoğraf noktaları ve kültürel detayları Türkçe anlatım.",
  },
  {
    img: kyoto,
    city: "Planlama",
    title: "Yeni Gelenlere Uyum Paketi",
    duration: "2 saat görüşme + rota",
    price: "¥4.000'den itibaren",
    desc: "Tokyo'ya yeni taşınanlar için mahalle, ulaşım, market ve günlük yaşam önerileri.",
  },
  {
    img: fuji,
    city: "Günübirlik",
    title: "Fuji / Kamakura Planı",
    duration: "Tam gün",
    price: "Talebe göre",
    desc: "Ulaşım seçenekleri, hava durumuna göre rota ve yorucu olmayan günübirlik gezi planı.",
  },
  {
    img: sakura,
    city: "Esnek",
    title: "Sana Özel Arkadaş Gibi Gezi",
    duration: "Kararlaştırırız",
    price: "Bütçeye göre",
    desc: "İlgi alanına, kalış sürene ve bütçene göre tamamen kişisel Tokyo programı.",
  },
];

function ToursPage() {
  return (
    <SiteLayout>
      <section className="container-narrow py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Hizmetler</p>
          <h1 className="text-4xl md:text-5xl">Paketler değil, sana uyan rahat planlar</h1>
          <p className="mt-6 text-muted-foreground">
            Ücretler örnek başlangıç fiyatıdır. Kişi sayısı, süre ve rotaya göre netleştirilir; ulaşım ve giriş ücretleri dahil değildir.
          </p>
        </div>

        <article className="mb-10 overflow-hidden rounded-lg border border-primary/25 bg-card shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <img
              src={tokyo}
              alt="İlk Gün Karşılama ve Destek Paketi"
              width={1200}
              height={900}
              className="h-full min-h-[280px] w-full object-cover"
            />
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Öne çıkan paket</p>
              <h2 className="mt-3 text-3xl md:text-4xl">İlk Gün Karşılama & Destek Paketi</h2>
              <p className="mt-4 text-muted-foreground">
                Tokyo’ya yeni gelen ve ilk gününde zorlanmak istemeyenler için birebir destek paketi. Havaalanından karşılayıp şehirde rahat hareket edebilmeniz için temel bilgileri birlikte hallediyoruz.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Paket içeriği</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <li>• Narita / Haneda havaalanında karşılama</li>
                    <li>• Şehre ulaşımın birlikte yapılması</li>
                    <li>• Suica / Pasmo kartının birlikte alınması</li>
                    <li>• Metro, tren, bilet alma ve yön bulma desteği</li>
                    <li>• Konbini, yemek ve günlük yaşam bilgileri</li>
                    <li>• Otelinize / konaklama yerinize kadar eşlik</li>
                  </ul>
                </div>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Kişi sayısı</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Fiyat 3 kişiye kadar sabittir. Daha fazlası için iletişime geçebilirsiniz.</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Fiyat</h3>
                    <p className="mt-2 text-2xl font-semibold text-foreground">10.000 Yen</p>
                    <p className="mt-1 text-sm text-muted-foreground">Türk Lirası karşılığı ve Türk kredi kartı ile ödeme imkanı bulunur.</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Notlar</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Ulaşım ücretleri müşteriye aittir. Ödeme hizmet öncesi veya başlangıcında yapılır.</p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">Japonya’ya ilk kez gelenler ve ilk gün yönlendirme isteyenler için uygundur.</p>
                <Link to="/iletisim" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Birlikte planlayalım
                </Link>
              </div>
            </div>
          </div>
        </article>

        <section className="mb-10 grid gap-6 rounded-lg border border-border bg-card p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Fiyatlandırma</p>
            <h2 className="mt-3 text-2xl">Fiyatlandırma & Esneklik Politikası</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Belirtilen fiyatlar yalnızca gezi ve eşlik hizmeti ücretidir. Paket dışında sizden ekstra bir ücret talep edilmez.
              Rehberlik süresince kendi ulaşım ve yemek masraflarımı kendim karşılıyorum.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Sizden yalnızca kendi kişisel harcamalarınız; ulaşım, yemek, giriş ücretleri ve benzeri masraflar beklenir.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Esneklik</p>
            <h2 className="mt-3 text-2xl">Rota Değişikliği & Ek Talepler</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tur sırasında planlanan rota dışında farklı bir bölgeye geçmek, yeni bir lokasyon eklemek veya süreyi uzatmak gibi
              durumlarda ek ücret uygulanabilir.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ek ücret, talebe göre önceden net şekilde belirtilir ve onayınız alınmadan uygulanmaz.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Katılım</p>
              <h2 className="mt-3 text-2xl">Katılım & Grup Politikası</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• Turlar maksimum 6 kişi ile sınırlıdır.</li>
                <li>• Çocuklu ailelerde bu sayı 7–8 kişiye kadar esnetilebilir.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Çocuklar</p>
              <h2 className="mt-3 text-2xl">Çocuk Politikası</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• 12 yaş altı çocuklardan ücret talep edilmez.</li>
                <li>• Çocuklar yalnızca ebeveyn veya velisi ile birlikte katılabilir.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Notlar</p>
              <h2 className="mt-3 text-2xl">Önemli Notlar</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• Grup sayısı, turun verimli ve konforlu geçmesi için sınırlıdır.</li>
                <li>• 6 kişi üzeri yetişkin gruplar için lütfen önceden iletişime geçiniz.</li>
                <li>• Rota ve tempo, grup yapısına göre ayarlanır.</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 border-t border-border pt-5 text-sm font-medium text-foreground">
            Amacım daha rahat, samimi ve kaliteli bir gezi deneyimi sunmak.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <article key={t.title} className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/45">
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.city}</p>
                <h2 className="mt-2 text-xl">{t.title}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{t.duration}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold text-foreground">{t.price}</span>
                  <Link to="/iletisim" className="text-xs font-medium text-primary hover:underline">
                    Sor →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
