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
      { title: "Turlar & Fiyatlar — Sakura Rehber" },
      { name: "description", content: "Tokyo, Kyoto, Osaka ve Fuji turları. Türkçe rehber eşliğinde uygun fiyatlı paketler." },
      { property: "og:title", content: "Japonya Turları — Sakura Rehber" },
      { property: "og:description", content: "Şehir turları, gece yürüyüşleri ve günübirlik kaçamaklar. Öğrenci bütçesine uygun." },
      { property: "og:image", content: torii },
    ],
  }),
  component: ToursPage,
});

const tours = [
  {
    img: tokyo,
    city: "Tokyo",
    title: "Tokyo Klasikleri",
    duration: "Tam gün · 8 saat",
    price: "¥7.000",
    desc: "Shibuya, Shinjuku, Asakusa ve Akihabara. Şehrin kalbi tek günde.",
  },
  {
    img: torii,
    city: "Kyoto",
    title: "Tapınaklar & Torii Yolu",
    duration: "Tam gün · 7 saat",
    price: "¥6.000",
    desc: "Fushimi Inari, Kinkaku-ji ve Arashiyama bambu ormanı.",
  },
  {
    img: kyoto,
    city: "Kyoto",
    title: "Gion Gece Yürüyüşü",
    duration: "Akşam · 3 saat",
    price: "¥4.500",
    desc: "Geyşa mahallesinde lanternlı sokaklar ve geleneksel atmosfer.",
  },
  {
    img: food,
    city: "Tokyo / Osaka",
    title: "Sokak Lezzetleri Turu",
    duration: "Akşam · 4 saat",
    price: "¥5.500",
    desc: "Ramen, takoyaki, izakaya — yiyecek dahil değil, rehber dahil.",
  },
  {
    img: fuji,
    city: "Fuji",
    title: "Fuji & Hakone Kaçamağı",
    duration: "Tam gün · 10 saat",
    price: "¥9.500",
    desc: "Tokyo'dan günübirlik. Gölet, pagoda ve onsen molası.",
  },
  {
    img: sakura,
    city: "Esnek",
    title: "Sana Özel Rota",
    duration: "Kararlaştırırız",
    price: "Talebe göre",
    desc: "İlgilerine, bütçene ve zamanına göre tamamen kişiye özel program.",
  },
];

function ToursPage() {
  return (
    <SiteLayout>
      <section className="container-narrow py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Turlar</p>
          <h1 className="font-serif text-4xl md:text-5xl ink-divider">Paketler & Fiyatlar</h1>
          <p className="mt-6 text-muted-foreground">
            Fiyatlar kişi başıdır, ulaşım ve giriş ücretleri dahil değildir.
            2+ kişilik gruplara indirim uygulanır.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((t) => (
            <article
              key={t.title}
              className="group flex flex-col bg-card border border-border/60 rounded-sm overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-primary tracking-widest uppercase">{t.city}</p>
                <h2 className="font-serif text-xl mt-1">{t.title}</h2>
                <p className="text-xs text-muted-foreground mt-1">{t.duration}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                  {t.desc}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="font-serif text-lg text-primary">{t.price}</span>
                  <Link
                    to="/iletisim"
                    className="text-xs text-foreground hover:text-primary transition-colors"
                  >
                    Rezervasyon →
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
