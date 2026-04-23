import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import sakura from "@/assets/gallery-sakura.jpg";

export const Route = createFileRoute("/hakkimda")({
  head: () => ({
    meta: [
      { title: "Hakkımda — Sakura Rehber" },
      { name: "description", content: "Japonya'da yaşayan bir Türk öğrenci olarak gezi rehberliği yapıyorum." },
      { property: "og:title", content: "Hakkımda — Sakura Rehber" },
      { property: "og:description", content: "Japonya'da Türk öğrenci rehber. Samimi, uygun fiyatlı turlar." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-narrow py-20 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2 animate-fade-up">
          <img
            src={sakura}
            alt="Sakura çiçekleri"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-sm w-full"
          />
        </div>
        <div className="md:col-span-3 animate-fade-up">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Hakkımda</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            Merhaba, ben <span className="text-primary">[İsim]</span>.
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Tokyo'da üniversite öğrencisiyim ve birkaç yıldır Japonya'da yaşıyorum.
              Buraya gelen Türk gezginlerin dil ve kültür farkından dolayı yaşadığı
              tereddütleri bizzat gördüğüm için bu işe başladım.
            </p>
            <p>
              Profesyonel turlardan farklı olarak küçük gruplarla, esnek programlarla
              ve uygun fiyatlarla geziyoruz. Amacım sana Japonya'yı bir turist gibi
              değil, burada yaşayan biri gibi göstermek.
            </p>
            <p>
              Japonca konuşuyorum, şehirleri biliyorum ve elbette en iyi ramen'in
              nerede olduğunu da. 🍜
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: "3+", l: "Yıl Japonya'da" },
              { n: "50+", l: "Mutlu misafir" },
              { n: "8", l: "Şehir" },
            ].map((s) => (
              <div key={s.l} className="bg-card border border-border/60 p-5 rounded-sm text-center">
                <div className="font-serif text-3xl text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <Link
            to="/iletisim"
            className="inline-flex mt-10 items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Tanışalım
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
