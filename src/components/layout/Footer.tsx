import { Landmark, Facebook, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  products: [
    { label: "Pożyczka osobista", href: "#produkty" },
    { label: "Pożyczka biznesowa", href: "#produkty" },
    { label: "Kredyt hipoteczny", href: "#produkty" },
  ],
  company: [
    { label: "O nas", href: "#" },
    { label: "Kariera", href: "#" },
    { label: "Kontakt", href: "#" },
  ],
  legal: [
    { label: "Regulamin", href: "#" },
    { label: "Polityka prywatności", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 font-semibold text-lg cursor-pointer hover:text-primary transition-colors"
            >
              <Landmark className="size-6 text-primary" aria-hidden />
              FinLoan
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Szybkie i przejrzyste pożyczki na Twoje cele. Licencjonowany
              pożyczkodawca.
            </p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Produkty</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.products.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Firma</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Prawne</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FinLoan. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
