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
    title: "İlk Gün Tokyo Desteği",
    duration: "3-4 saat",
    price: "¥5.000'den itibaren",
    desc: "Metro kartı, SIM/eSIM, temel alışveriş, Shibuya-Shinjuku çevresi ve şehir mantığını oturtma.",
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
