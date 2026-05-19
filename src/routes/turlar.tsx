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
    title: "Modern Tokyo Deneyimi",
    route: "Shibuya + Harajuku + Shinjuku",
    duration: "6–8 saat",
    price: "Kişi sayısına göre",
    desc: "Tokyo’nun en popüler ve enerjik bölgelerini rahat tempoda keşfedin.",
    highlights: ["Shibuya Crossing & Hachiko", "Harajuku Takeshita Street", "Meiji Shrine", "Shinjuku şehir manzarası & Kabukicho"],
  },
  {
    img: torii,
    city: "Tokyo",
    title: "Geleneksel + Modern Karışık",
    route: "Asakusa + Ueno + Akihabara",
    duration: "6–8 saat",
    price: "Kişi sayısına göre",
    desc: "Tarihi ve modern Japonya’yı aynı gün içinde birlikte deneyimleyin.",
    highlights: ["Senso-ji Tapınağı", "Nakamise Street", "Ueno Park", "Akihabara"],
  },
  {
    img: tokyo,
    city: "Tokyo",
    title: "Lüks & Şehir Manzarası",
    route: "Roppongi + Tokyo Tower + Azabudai Hills + Shibuya",
    duration: "5–7 saat",
    price: "Kişi sayısına göre",
    desc: "Modern, estetik ve şehir manzaralı premium hissi veren bir rota.",
    highlights: ["Roppongi Hills", "Tokyo Tower", "Azabudai Hills", "Shibuya gece ışıkları"],
  },
  {
    img: sakura,
    city: "Tokyo",
    title: "Deniz & Şehir Kaçamağı",
    route: "Odaiba + Rainbow Bridge + Ginza",
    duration: "6–8 saat",
    price: "Kişi sayısına göre",
    desc: "Daha sakin, manzaralı ve şehirden kopmadan ferah bir Tokyo deneyimi.",
    highlights: ["Odaiba sahil yürüyüşü", "Rainbow Bridge manzarası", "Opsiyonel teamLab Planets", "Ginza"],
  },
  {
    img: food,
    city: "Tokyo",
    title: "Gece Hayatı Deneyimi",
    route: "Shinjuku + Golden Gai + Shibuya",
    duration: "4–6 saat",
    price: "Kişi sayısına göre",
    desc: "Tokyo’nun gece atmosferini güvenli ve keyifli şekilde keşfedin.",
    highlights: ["Kabukicho", "Golden Gai", "Izakaya deneyimi", "Shibuya gece turu"],
  },
  {
    img: kyoto,
    city: "Tokyo",
    title: "Alışveriş & Trend Turu",
    route: "Shibuya + Harajuku + Ginza",
    duration: "5–7 saat",
    price: "Kişi sayısına göre",
    desc: "Moda, mağazalar ve Tokyo trendlerini sevenler için alışveriş odaklı tur.",
    highlights: ["Shibuya mağazalar", "Harajuku streetwear", "Ginza"],
  },
  {
    img: tokyo,
    city: "Tokyo",
    title: "Anime & Kültür Turu",
    route: "Akihabara + Ikebukuro",
    duration: "5–7 saat",
    price: "Kişi sayısına göre",
    desc: "Anime ve Japon pop kültürü meraklıları için mağaza ve kültür rotası.",
    highlights: ["Akihabara", "Ikebukuro", "Anime mağazaları"],
  },
  {
    img: fuji,
    city: "Yokohama",
    title: "Yokohama Günübirlik Tur",
    route: "Minato Mirai + Chinatown + Red Brick Warehouse",
    duration: "7–9 saat",
    price: "Kişi sayısına göre",
    desc: "Tokyo dışında farklı, manzaralı ve keyifli bir şehir deneyimi.",
    highlights: ["Minato Mirai", "Red Brick Warehouse", "Yokohama Chinatown", "Yamashita Park"],
  },
];

function ToursPage() {
  return (
    <SiteLayout>
      <section className="container-narrow py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Hizmetler</p>
          <h1 className="text-4xl md:text-5xl">Tokyo & çevresi gezi paketleri</h1>
          <p className="mt-6 text-muted-foreground">
            Otelden alım dahil butik tur planları. Tüm turlar küçük gruplar ile, daha rahat ve samimi bir deneyim sunacak şekilde yapılır.
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
                    <p className="mt-2 text-sm text-muted-foreground">Fiyat 3 kişiye kadar sabittir. Maksimum 5 yetişkin kabul edilmektedir.</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Fiyat</h3>
                    <p className="mt-2 text-2xl font-semibold text-foreground">13.000 Yen</p>
                    <p className="mt-1 text-sm text-muted-foreground">Türk banka transferi veya Japonya'da nakit yen olarak ödeme yapılabilir.</p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">Japonya’ya ilk kez gelenler ve ilk gün yönlendirme isteyenler için uygundur.</p>
                <Link to="/iletisim" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Birlikte planlayalım
                </Link>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Tur öncesi 3.000 yen garanti ücreti alınır. Tur gerçekleşirse ödemeden düşülür. Tur gününden bir önceki geceye kadar iptal edilirse geri ödenir.
              </p>
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
                <li>• Turlar maksimum 5 yetişkin ile sınırlıdır.</li>
                <li>• Çocuklu ailelerde bu sayı 6–7 kişiye kadar esnetilebilir.</li>
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
                <li>• 5 kişi üzeri yetişkin gruplar kabul edilmemektedir.</li>
                <li>• Rota ve tempo, grup yapısına göre ayarlanır.</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 border-t border-border pt-5 text-sm font-medium text-foreground">
            Amacım daha rahat, samimi ve kaliteli bir gezi deneyimi sunmak.
          </p>
        </section>

        <section className="mb-10 grid gap-6 rounded-lg border border-border bg-card p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Gezi paketleri</p>
            <h2 className="mt-3 text-2xl">Tokyo & çevresi fiyatlandırma</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Fiyatlar kişi sayısına göre belirlenir. Maksimum 5 yetişkin kabul edilmektedir.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ödeme: Türk banka transferi veya Japonya'da nakit yen olarak yapılabilir.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["1 kişi: 20,000 yen", "2 kişi: 13,000 yen / kişi", "3 kişi: 11,000 yen / kişi", "4 kişi: 9,000 yen / kişi", "5 kişi: 8,000 yen / kişi"].map((item) => (
              <div key={item} className="rounded-md border border-border bg-background p-4 text-sm font-semibold text-foreground">
                {item}
              </div>
            ))}
          </div>
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
                <p className="mt-1 text-sm font-medium text-foreground">{t.route}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.duration}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold text-foreground">{t.price}</span>
                  <Link to="/iletisim" className="text-xs font-medium text-primary hover:underline">
                    Sor →
                  </Link>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Tur öncesi 3.000 yen garanti ücreti alınır. Tur gerçekleşirse ödemeden düşülür. Tur gününden bir önceki geceye kadar iptal edilirse geri ödenir.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Ödeme: Türk banka transferi veya Japonya'da nakit yen olarak yapılabilir.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
