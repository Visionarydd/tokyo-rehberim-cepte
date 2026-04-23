import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — Sakura Rehber" },
      { name: "description", content: "Japonya turu için WhatsApp, e-posta veya form ile iletişime geçin." },
      { property: "og:title", content: "İletişim — Sakura Rehber" },
      { property: "og:description", content: "Rezervasyon ve sorularınız için WhatsApp ve form." },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP = "+810000000000";
const EMAIL = "merhaba@sakurarehber.com";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Merhaba! Adım ${data.get("name")}. ${data.get("message")} (Tarih: ${data.get("date") || "esnek"})`;
    const url = `https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="container-narrow py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">連絡 · İletişim</p>
          <h1 className="font-serif text-4xl md:text-5xl ink-divider">Tanışalım</h1>
          <p className="mt-6 text-muted-foreground">
            En hızlı yanıt için WhatsApp'tan yazabilir, ya da aşağıdaki formu doldurabilirsin.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-card border border-border/60 rounded-sm p-6 md:p-8 space-y-4"
          >
            <div>
              <label className="block text-sm mb-1.5">Adın</label>
              <input
                name="name"
                required
                className="w-full px-3 py-2.5 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-primary"
                placeholder="Ahmet Yılmaz"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1.5">E-posta</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2.5 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-primary"
                  placeholder="ornek@mail.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1.5">Tarih</label>
                <input
                  name="date"
                  type="date"
                  className="w-full px-3 py-2.5 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1.5">Mesajın</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-3 py-2.5 bg-background border border-input rounded-sm text-sm focus:outline-none focus:border-primary resize-none"
                placeholder="Hangi şehirler? Kaç kişi? Ne ilgini çekiyor?"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp ile Gönder
            </button>
            {sent && (
              <p className="text-xs text-muted-foreground text-center">
                WhatsApp açıldı. Açılmadıysa aşağıdaki butonu kullan.
              </p>
            )}
          </form>

          {/* Sidebar */}
          <aside className="md:col-span-2 space-y-3">
            <a
              href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener"
              className="flex items-start gap-4 p-5 bg-card border border-border/60 rounded-sm hover:border-primary/40 transition-colors"
            >
              <div className="text-primary mt-0.5"><MessageCircle size={20} /></div>
              <div>
                <div className="font-medium text-sm">WhatsApp</div>
                <div className="text-xs text-muted-foreground mt-0.5">{WHATSAPP}</div>
                <div className="text-xs text-primary mt-2">Direkt yaz →</div>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 p-5 bg-card border border-border/60 rounded-sm hover:border-primary/40 transition-colors"
            >
              <div className="text-primary mt-0.5"><Mail size={20} /></div>
              <div>
                <div className="font-medium text-sm">E-posta</div>
                <div className="text-xs text-muted-foreground mt-0.5">{EMAIL}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-5 bg-card border border-border/60 rounded-sm">
              <div className="text-primary mt-0.5"><MapPin size={20} /></div>
              <div>
                <div className="font-medium text-sm">Konum</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Tokyo merkezli · Tüm Japonya
                </div>
              </div>
            </div>
            <div className="p-5 bg-secondary rounded-sm text-xs text-muted-foreground leading-relaxed">
              Genelde 24 saat içinde yanıt veriyorum. Japonya saatiyle 09:00–22:00 arası daha hızlıyım. 🌸
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
