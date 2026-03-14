import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FileEdit, CheckCircle, Banknote } from "lucide-react"

const steps = [
  {
    icon: FileEdit,
    title: "Aplikuj online",
    description:
      "Wypełnij krótki formularz w kilka minut. Nie wymagamy skomplikowanych dokumentów.",
  },
  {
    icon: CheckCircle,
    title: "Otrzymaj decyzję",
    description:
      "Automatyczna weryfikacja. Większość wniosków rozpatrywana w czasie rzeczywistym.",
  },
  {
    icon: Banknote,
    title: "Odbierz środki",
    description:
      "Pieniądze na koncie nawet w 15 minut. Bez wizyty w oddziale.",
  },
]

export function HowItWorks() {
  return (
    <section id="jak-dziala" className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Jak to działa
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Trzy proste kroki do Twojej pożyczki
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <Card
              key={title}
              className="group cursor-default transition-all duration-200 hover:shadow-lg hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="size-6" aria-hidden />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Krok {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
