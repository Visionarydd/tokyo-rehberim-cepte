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
      { title: "Galeri — Tokyo Türkçe Rehber" },
      { name: "description", content: "Tokyo ve Japonya'dan rota ilhamı: şehir, yemek, kültür ve fotoğraf noktaları." },
      { property: "og:title", content: "Galeri — Tokyo Türkçe Rehber" },
      { property: "og:description", content: "Tokyo gezisi için temiz, modern ve ilham veren Japonya kareleri." },
      { property: "og:image", content: tokyo },
      { name: "twitter:image", content: tokyo },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: tokyo, caption: "Tokyo gece yürüyüşü" },
  { img: food, caption: "Bütçe dostu lezzet rotaları" },
  { img: sakura, caption: "Sakura sezonu" },
  { img: torii, caption: "Kültür ve tapınak atmosferi" },
  { img: fuji, caption: "Günübirlik kaçamak planları" },
  { img: kyoto, caption: "Sakin sokaklar ve fotoğraf noktaları" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="container-narrow py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Galeri</p>
          <h1 className="text-4xl md:text-5xl">Tokyo planına ilham olacak kareler</h1>
          <p className="mt-5 text-muted-foreground">
            Geziler; yoğun tur programından çok, rahat tempo ve güzel anlar üzerine kurulu.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {items.map((it, i) => (
            <figure key={it.caption} className={`group relative overflow-hidden rounded-lg bg-card ${i === 0 || i === 4 ? "md:col-span-2" : ""}`}>
              <img
                src={it.img}
                alt={it.caption}
                loading="lazy"
                width={1024}
                height={1024}
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
