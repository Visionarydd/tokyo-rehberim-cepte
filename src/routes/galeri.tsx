import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import torii from "@/assets/gallery-torii.jpg";
import tokyo from "@/assets/gallery-tokyo.jpg";
import kyoto from "@/assets/gallery-kyoto.jpg";
import food from "@/assets/gallery-food.jpg";
import fuji from "@/assets/gallery-fuji.jpg";
import sakura from "@/assets/gallery-sakura.jpg";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri — Sakura Rehber" },
      { name: "description", content: "Japonya'dan kareler: Fuji, Kyoto, Tokyo ve daha fazlası." },
      { property: "og:title", content: "Galeri — Sakura Rehber" },
      { property: "og:description", content: "Turlardan ve Japonya'nın dört bir yanından fotoğraflar." },
      { property: "og:image", content: fuji },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: torii, caption: "Fushimi Inari, Kyoto" },
  { img: fuji, caption: "Fuji & Chureito Pagoda" },
  { img: kyoto, caption: "Gion sokakları, Kyoto" },
  { img: tokyo, caption: "Shibuya gece, Tokyo" },
  { img: food, caption: "Tonkotsu ramen" },
  { img: sakura, caption: "Sakura mevsimi" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="container-narrow py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">写真 · Galeri</p>
          <h1 className="font-serif text-4xl md:text-5xl ink-divider">Japonya'dan kareler</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((it, i) => (
            <figure
              key={it.caption}
              className={`group relative overflow-hidden rounded-sm ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img
                src={it.img}
                alt={it.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-3 text-background text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
