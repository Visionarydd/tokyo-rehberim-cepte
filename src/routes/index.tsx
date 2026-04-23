import { createFileRoute, Link } from "@tanstack/react-router";
import heroFuji from "@/assets/hero-fuji.jpg";
import galleryTorii from "@/assets/gallery-torii.jpg";
import galleryKyoto from "@/assets/gallery-kyoto.jpg";
import galleryFood from "@/assets/gallery-food.jpg";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakura Rehber — Japonya'da Türkçe Gezi Rehberi" },
      {
        name: "description",
        content:
          "Japonya'da Türk gezginlere yönelik samimi ve uygun fiyatlı Türkçe gezi rehberliği. Tokyo, Kyoto, Osaka turları.",
      },
      { property: "og:title", content: "Sakura Rehber — Japonya Türkçe Rehber" },
      { property: "og:description", content: "Tokyo, Kyoto, Osaka'da Türkçe rehber eşliğinde unutulmaz bir Japonya deneyimi." },
      { property: "og:image", content: heroFuji },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
          <div className="animate-fade-up">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              ようこそ · Hoş geldiniz
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">
              Japonya'yı <br />
              <span className="text-primary">Türkçe</span> keşfedin.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
              Tokyo'nun neon sokaklarından Kyoto'nun sessiz tapınaklarına;
              yanınızda öğrenci bütçesine uygun, samimi bir Türk rehber.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/turlar"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Turları gör
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center rounded-sm border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
              >
                İletişime geç
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 bg-accent/30 -rotate-2 rounded-sm" />
            <img
              src={heroFuji}
              alt="Fuji Dağı ve sakura çiçekleri"
              width={1600}
              height={1024}
              className="relative w-full h-auto rounded-sm shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* DEĞER ÖNERİSİ */}
      <section className="container-narrow py-20 border-t border-border/60">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Neden ben?</p>
          <h2 className="font-serif text-3xl md:text-4xl ink-divider">Yerelden, samimi rehberlik</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              k: "学",
              t: "Öğrenci dostu fiyat",
              d: "Profesyonel ajanslara göre çok daha uygun ücretler. Bütçenizi gezmeye ayırın.",
            },
            {
              k: "心",
              t: "Türkçe ve samimi",
              d: "Dil bariyeri yok. Sorularınız, kahve molanız, hatta ev özleminiz için bile yanınızdayım.",
            },
            {
              k: "道",
              t: "Yerelin bildiği rotalar",
              d: "Turistik klişelerin ötesinde, gerçek Japonya'yı yaşatan adresler.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="bg-card border border-border/60 p-8 rounded-sm hover:border-primary/40 transition-colors"
            >
              <div className="text-primary font-serif text-4xl mb-4">{f.k}</div>
              <h3 className="font-serif text-xl mb-2">{f.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TUR ÖNİZLEME */}
      <section className="container-narrow py-20 border-t border-border/60">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">Popüler</p>
            <h2 className="font-serif text-3xl md:text-4xl">Öne çıkan turlar</h2>
          </div>
          <Link to="/turlar" className="text-sm text-primary hover:underline">
            Tüm turlar →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: galleryTorii, city: "Kyoto", title: "Tapınaklar & Torii", price: "¥6.000" },
            { img: galleryKyoto, city: "Kyoto", title: "Gion gece yürüyüşü", price: "¥4.500" },
            { img: galleryFood, city: "Tokyo", title: "Sokak lezzetleri turu", price: "¥5.500" },
          ].map((t) => (
            <article
              key={t.title}
              className="group overflow-hidden rounded-sm bg-card border border-border/60"
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
              <div className="p-5">
                <p className="text-xs text-primary tracking-widest uppercase">{t.city}</p>
                <h3 className="font-serif text-lg mt-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">Kişi başı {t.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow py-20">
        <div className="bg-foreground text-background rounded-sm p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 text-[12rem] leading-none font-serif text-primary/20 select-none">
            桜
          </div>
          <h2 className="font-serif text-3xl md:text-4xl relative">Japonya seni bekliyor.</h2>
          <p className="mt-4 text-background/70 max-w-lg mx-auto relative">
            Tarihini ve bütçeni paylaş, sana özel bir rota hazırlayayım.
          </p>
          <Link
            to="/iletisim"
            className="relative inline-flex mt-8 items-center justify-center rounded-sm bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Planlamaya başla
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
