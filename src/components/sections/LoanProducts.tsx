import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Briefcase, Home } from "lucide-react"

const products = [
  {
    icon: User,
    title: "Pożyczka osobista",
    rate: "od 7.9%",
    maxAmount: "do 150 000 zł",
    term: "6–84 miesięcy",
    benefits: ["Bez prowizji", "Szybka decyzja", "Elastyczne spłaty"],
    badge: "Popularne",
  },
  {
    icon: Briefcase,
    title: "Pożyczka biznesowa",
    rate: "od 6.5%",
    maxAmount: "do 500 000 zł",
    term: "12–120 miesięcy",
    benefits: ["Dla firm", "Inwestycje", "Kapitał obrotowy"],
    badge: null,
  },
  {
    icon: Home,
    title: "Kredyt hipoteczny",
    rate: "od 5.2%",
    maxAmount: "do 2 000 000 zł",
    term: "do 35 lat",
    benefits: ["Niskie oprocentowanie", "Dopłata do kredytu", "Refinansowanie"],
    badge: "Nowość",
  },
]

export function LoanProducts() {
  return (
    <section id="produkty" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nasze produkty
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Wybierz produkt dopasowany do Twoich potrzeb
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map(({ icon: Icon, title, rate, maxAmount, term, benefits, badge }) => (
            <Card
              key={title}
              className="group flex flex-col cursor-pointer transition-all duration-200 hover:shadow-xl hover:border-primary/40"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="size-6" aria-hidden />
                </div>
                {badge && (
                  <Badge variant="secondary" className="shrink-0">
                    {badge}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <h3 className="text-xl font-semibold">{title}</h3>
                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">RRSO: </span>
                    <span className="font-medium">{rate}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Kwota: </span>
                    <span className="font-medium">{maxAmount}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Okres: </span>
                    <span className="font-medium">{term}</span>
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full cursor-pointer">
                  <a href="#aplikuj">Wybierz</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
