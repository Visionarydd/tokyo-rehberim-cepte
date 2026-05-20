import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-secondary/45">
      <div className="container-narrow grid gap-8 py-12 text-sm md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-xs">東</span>
            Tokyo Türkçe Rehber
          </div>
          <p className="max-w-xs leading-relaxed text-muted-foreground">
            Tokyo'ya gelen Türkler için samimi, güvenilir ve bütçe dostu rehberlik.
          </p>
        </div>
        <div>
          <div className="mb-3 font-medium">Sayfalar</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/hakkimda" className="hover:text-primary">Hakkımda</Link></li>
            <li><Link to="/turlar" className="hover:text-primary">Hizmetler</Link></li>
            <li><Link to="/galeri" className="hover:text-primary">Galeri</Link></li>
            <li><Link to="/iletisim" className="hover:text-primary">İletişim</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 font-medium">İletişim</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="https://wa.me/08062325121" target="_blank" rel="noopener" className="hover:text-primary">WhatsApp üzerinden yazın</a></li>
            <li>E-posta: merhaba@tokyorehber.com</li>
            <li>Tokyo merkezli · Esnek rota</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tokyo Türkçe Rehber · 学生フレンドリー
      </div>
    </footer>
  );
}
