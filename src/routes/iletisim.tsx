import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, MessageCircle, Mail } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — Tokyo Türkçe Rehber" },
      { name: "description", content: "Tokyo'da Türkçe rehberlik için WhatsApp üzerinden hızlıca plan sorun." },
      { property: "og:title", content: "İletişim — Tokyo Türkçe Rehber" },
      { property: "og:description", content: "Tokyo geziniz veya yeni geliş süreciniz için Türkçe destek alın." },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP = "08062325121";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Merhaba! Tokyo'da Türkçe rehberlik için yazıyorum. Adım ${data.get("name")}. Kişi sayısı: ${data.get("people")}. Tarih: ${data.get("date") || "esnek"}. Mesajım: ${data.get("message")}`;
    const url = `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="container-narrow py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">İletişim</p>
          <h1 className="text-4xl md:text-5xl">Tokyo planını yaz, birlikte sadeleştirelim.</h1>
          <p className="mt-6 text-muted-foreground">
            Ne zaman geleceğini, kaç kişi olduğunu ve nasıl bir gezi istediğini gönder; en uygun planı konuşalım.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <form onSubmit={handleSubmit} className="soft-panel space-y-4 rounded-lg p-6 md:col-span-3 md:p-8">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Adın</label>
              <input
                name="name"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Ahmet Yılmaz"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium">Kişi sayısı</label>
                <input
                  name="people"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="2"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium">E-posta</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="ornek@mail.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Tarih</label>
              <input
                name="date"
                type="date"
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Nasıl bir destek istiyorsun?</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="İlk kez geliyorum, 3 günüm var. Daha çok yemek, alışveriş ve fotoğraf noktaları ilgimi çekiyor."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle size={16} /> WhatsApp ile gönder
            </button>
            {sent && <p className="text-center text-xs text-muted-foreground">WhatsApp açıldı. Açılmadıysa yandaki direkt bağlantıyı kullanabilirsin.</p>}
          </form>

          <aside className="space-y-3 md:col-span-2">
            <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`} target="_blank" rel="noopener" className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/45">
              <MessageCircle className="mt-0.5 text-primary" size={20} />
              <div>
                <div className="text-sm font-semibold">WhatsApp</div>
                <div className="mt-2 text-xs font-medium text-primary">Direkt yaz →</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              <MapPin className="mt-0.5 text-primary" size={20} />
              <div>
                <div className="text-sm font-semibold">Konum</div>
                <div className="mt-0.5 text-xs text-muted-foreground">Tokyo merkezli · Esnek buluşma noktası</div>
              </div>
            </div>
            <div className="rounded-lg bg-secondary p-5 text-xs leading-relaxed text-muted-foreground">
              Genelde 24 saat içinde dönüş yaparım. Plan net değilse sorun değil; beraber netleştiririz.
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
