import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import sakura from "@/assets/gallery-sakura.jpg";

export const Route = createFileRoute("/hakkimda")({
  head: () => ({
    meta: [
      { title: "Hakkımda — Tokyo Türkçe Rehber" },
      { name: "description", content: "Tokyo'da yaşayan Türk öğrenci rehber: samimi, güvenilir ve bütçe dostu gezi desteği." },
      { property: "og:title", content: "Hakkımda — Tokyo Türkçe Rehber" },
      { property: "og:description", content: "Tokyo'yu arkadaş gibi gezdiren Türkçe öğrenci rehber." },
      { property: "og:image", content: sakura },
      { name: "twitter:image", content: sakura },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-narrow grid gap-12 py-16 md:grid-cols-5 md:items-start md:py-20">
        <div className="md:col-span-2">
          <img
            src={sakura}
            alt="Tokyo'da sakura mevsimi"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-xl"
          />
        </div>
        <div className="md:col-span-3">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Hakkımda</p>
          <h1 className="text-4xl leading-tight md:text-5xl">Tokyo'da öğrenciyim; gezide yanında güvenilir bir Türk arkadaş gibi olurum.</h1>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Japonya'ya ilk geldiğimde metrodan yemek siparişine kadar birçok şeyin dışarıdan göründüğünden daha karmaşık olduğunu fark ettim. Bu yüzden Tokyo'ya gelen Türklere daha rahat, anlaşılır ve samimi bir deneyim sunmak istiyorum.
            </p>
            <p>
              Amacım pahalı ve mesafeli bir tur vermek değil; şehri güvenle gezebileceğin, soru sorabileceğin ve bütçeni koruyabileceğin bir plan hazırlamak.
            </p>
            <p>
              İstersen klasik noktaları gezeriz, istersen daha lokal mahallelere, uygun restoranlara ve fotoğraf rotalarına bakarız.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { n: "TR", l: "Türkçe rahat iletişim" },
              { n: "Tokyo", l: "Yerel günlük destek" },
              { n: "Esnek", l: "Bütçene göre plan" },
            ].map((s) => (
              <div key={s.l} className="soft-panel rounded-lg p-5">
                <div className="text-2xl font-bold text-primary">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <Link
            to="/iletisim"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tanışalım
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
