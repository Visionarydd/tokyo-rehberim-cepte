import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Wallet } from "lucide-react";
import heroFuji from "@/assets/hero-fuji.jpg";
import galleryTokyo from "@/assets/gallery-tokyo.jpg";
import galleryFood from "@/assets/gallery-food.jpg";
import galleryTorii from "@/assets/gallery-torii.jpg";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tokyo’da Türkçe Rehberlik & Arkadaş Gibi Gezi" },
      {
        name: "description",
        content:
          "Tokyo'ya gelen Türkler için arkadaş gibi, güvenilir ve öğrenci bütçesine uygun Türkçe rehberlik hizmeti.",
      },
      { property: "og:title", content: "Tokyo’da Türkçe Rehberlik & Arkadaş Gibi Gezi" },
      { property: "og:description", content: "Tokyo'yu Türkçe bilen, samimi ve güvenilir bir yerel arkadaşla keşfedin." },
      { property: "og:image", content: heroFuji },
      { name: "twitter:image", content: heroFuji },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Tokyo Türkçe Rehber",
          description:
            "Tokyo'da yaşayan Türk üniversite öğrencisi tarafından sunulan, uygun fiyatlı ve arkadaş gibi Türkçe rehberlik hizmeti.",
          url: "https://tokyo-rehberim-cepte.lovable.app",
          areaServed: { "@type": "City", name: "Tokyo" },
          inLanguage: "tr",
          priceRange: "$$",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Turkish", "Japanese", "English"],
            email: "cnbrkkrslh0001@gmail.com",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    icon: MapPin,
    title: "Tokyo'yu kolaylaştıran rota",
    desc: "Metro, mahalleler, yemek seçimi ve kültür kuralları konusunda yanında Türkçe destek.",
  },
  {
    icon: MessageCircle,
    title: "Arkadaş gibi iletişim",
    desc: "Resmi tur havasından uzak; soru sorabildiğin, rahat ve samimi bir gezi deneyimi.",
  },
  {
    icon: Wallet,
    title: "Öğrenci dostu ücret",
    desc: "Uygun fiyatlı ama özenli hizmet. Ucuz değil; gereksiz pahalı hiç değil.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="container-narrow grid gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              Tokyo merkezli · Türkçe destek · Esnek plan
            </p>
            <h1 className="max-w-3xl text-4xl leading-tight text-foreground md:text-6xl">
              Tokyo’da Türkçe Rehberlik & Arkadaş Gibi Gezi
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              İlk kez gelenler, yeni taşınanlar ve Tokyo'yu stressiz gezmek isteyen Türkler için
              samimi, güvenilir ve öğrenci temelli rehberlik.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                WhatsApp'tan plan sor <ArrowRight size={16} />
              </Link>
              <Link
                to="/turlar"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Hizmetleri gör
              </Link>
            </div>
            <div className="mt-8 grid max-w-lg gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                "Türkçe anlatım",
                "Küçük grup",
                "Bütçe odaklı rota",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={16} /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up">
            <img
              src={heroFuji}
              alt="Tokyo ve Japonya gezisi için Fuji manzarası"
              width={1600}
              height={1024}
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl md:aspect-[5/6]"
            />
            <div className="soft-panel absolute bottom-5 left-5 right-5 rounded-lg p-4 backdrop-blur-md">
              <p className="text-sm font-semibold text-foreground">İlk Tokyo günün daha kolay geçsin.</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Nereden başlanır, hangi hat kullanılır, nerede yenir — birlikte çözeriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="soft-panel rounded-lg p-6">
              <item.icon className="mb-5 text-primary" size={24} />
              <h2 className="text-xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-narrow py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Popüler seçenekler</p>
            <h2 className="text-3xl md:text-4xl">Tokyo'da rahat başlayan planlar</h2>
          </div>
          <Link to="/turlar" className="text-sm font-medium text-primary hover:underline">
            Tüm hizmetler →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: galleryTokyo, title: "İlk Gün Tokyo Tanıtımı", desc: "Shibuya, Shinjuku, metro ve temel alışveriş noktaları." },
            { img: galleryFood, title: "Yemek & Mahalle Turu", desc: "Ramen, kafe, market kültürü ve bütçe dostu lezzetler." },
            { img: galleryTorii, title: "Fotoğraf Rotası", desc: "Sakin sokaklar, tapınak atmosferi ve güzel kareler." },
          ].map((tour) => (
            <article key={tour.title} className="group overflow-hidden rounded-lg border border-border bg-card">
              <img
                src={tour.img}
                alt={tour.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-lg">{tour.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tour.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-narrow py-16">
        <div className="rounded-lg bg-foreground p-8 text-background md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl">Tokyo planını birlikte netleştirelim.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/75">
                Kaç gün kalacağını, ilgi alanlarını ve bütçeni yaz; sana uygun, gerçekçi ve yorucu olmayan bir rota önerisiyle döneyim.
              </p>
            </div>
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Mesaj gönder
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
