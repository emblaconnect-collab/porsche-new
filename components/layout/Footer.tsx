import Link from "next/link";

const cols = [
  { title: "Modelos", links: [{ label: "911 Turbo S", href: "/showroom/911-turbo-s" }, { label: "Taycan", href: "/showroom/taycan" }, { label: "Cayenne", href: "/showroom/cayenne" }, { label: "718 Cayman", href: "/showroom/718" }] },
  { title: "Explorar", links: [{ label: "Showroom", href: "/showroom" }, { label: "Configurar", href: "/configure/911-turbo-s" }, { label: "Experiências", href: "/experience" }, { label: "Sobre", href: "/about" }] },
  { title: "Contato", links: [{ label: "Fale Conosco", href: "/contact" }, { label: "Concessionárias", href: "/contact" }, { label: "Test Drive", href: "/experience" }, { label: "Imprensa", href: "/about" }] },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-2xl font-bold tracking-[0.25em] text-white uppercase block mb-4">PORSCHE</span>
            <p className="text-white/40 text-xs leading-relaxed tracking-wide">
              Não Existe Substituto.<br />Engenharia com paixão desde 1948.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-bold mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs tracking-wide text-white/50 hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-widest text-white/20 uppercase">© 2024 Porsche AG. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            {["Legal", "Privacidade", "Cookies"].map((l) => (
              <Link key={l} href="#" className="text-[10px] tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
