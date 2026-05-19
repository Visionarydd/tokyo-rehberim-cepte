import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

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
  { img: gallery1, caption: "Shibuya Crossing — Tokyo" },
  { img: gallery2, caption: "Shinjuku gece sokakları" },
  { img: gallery3, caption: "Asakusa · Senso-ji Tapınağı" },
  { img: gallery4, caption: "Minato Mirai — Yokohama" },
  { img: "https://images.unsplash.com/photo-1565017228812-bea9c5dabe27?w=1400&q=80", caption: "Yokohama Çin Mahallesi" },
  { img: "https://images.unsplash.com/photo-1554797589-7241bb691973?w=1400&q=80", caption: "Tokyo sokak lezzetleri" },
  { img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1400&q=80", caption: "Tokyo Tower" },
  { img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1400&q=80", caption: "Odaiba sahili & Rainbow Bridge" },
  { img: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1400&q=80", caption: "Sakura sezonu — Tokyo" },
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
