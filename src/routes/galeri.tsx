import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri — Tokyo & Yokohama Türkçe Rehber" },
      { name: "description", content: "Tokyo ve Yokohama'dan gerçek kareler: Shibuya, Shinjuku, Asakusa, Odaiba, Minato Mirai ve daha fazlası." },
      { property: "og:title", content: "Galeri — Tokyo & Yokohama Türkçe Rehber" },
      { property: "og:description", content: "Tokyo ve Yokohama gezisi için ilham veren gerçek fotoğraflar." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&q=80" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&q=80" },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1400&q=80", caption: "Shibuya Crossing — Tokyo" },
  { img: "https://images.unsplash.com/photo-1554797589-7241bb691973?w=1400&q=80", caption: "Shinjuku gece sokakları" },
  { img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1400&q=80", caption: "Asakusa · Senso-ji Tapınağı" },
  { img: "https://images.unsplash.com/photo-1526481280690-b03a8865dfe0?w=1400&q=80", caption: "Minato Mirai — Yokohama" },
  { img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=1400&q=80", caption: "Yokohama Çin Mahallesi" },
  { img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1400&q=80", caption: "Tokyo sokak lezzetleri" },
  { img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1400&q=80", caption: "Tokyo Tower" },
  { img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=1400&q=80", caption: "Odaiba sahili & Rainbow Bridge" },
  { img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1400&q=80", caption: "Sakura sezonu" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="container-narrow py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Galeri</p>
          <h1 className="text-4xl md:text-5xl">Tokyo & Yokohama'dan gerçek kareler</h1>
          <p className="mt-5 text-muted-foreground">
            Gezdiğimiz noktalardan örnekler — yoğun program değil, rahat tempo ve güzel anlar.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {items.map((it, i) => (
            <figure key={it.caption} className={`group relative overflow-hidden rounded-lg bg-card ${i === 0 || i === 4 ? "md:col-span-2" : ""}`}>
              <img
                src={it.img}
                alt={it.caption}
                loading="lazy"
                width={1400}
                height={1050}
                className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-[4/3]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-xs font-medium text-background">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
