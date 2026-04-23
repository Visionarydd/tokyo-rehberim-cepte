import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-narrow py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-2 font-serif text-base mb-2">
            <span className="text-primary text-xl">⛩</span> Sakura Rehber
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Japonya'da Türkçe, samimi ve uygun fiyatlı gezi rehberliği.
          </p>
        </div>
        <div>
          <div className="font-medium mb-2">Sayfalar</div>
          <ul className="space-y-1.5 text-muted-foreground">
            <li><Link to="/hakkimda" className="hover:text-primary">Hakkımda</Link></li>
            <li><Link to="/turlar" className="hover:text-primary">Turlar</Link></li>
            <li><Link to="/galeri" className="hover:text-primary">Galeri</Link></li>
            <li><Link to="/iletisim" className="hover:text-primary">İletişim</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">İletişim</div>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>WhatsApp: +81 000 000 0000</li>
            <li>E-posta: merhaba@sakurarehber.com</li>
            <li>Tokyo, Japonya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sakura Rehber · ありがとう
      </div>
    </footer>
  );
}
