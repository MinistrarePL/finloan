import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Szybka decyzja i pieniądze na koncie w 20 minut. Polecam każdemu, kto potrzebuje pilnej pożyczki.",
    name: "Anna Kowalska",
    role: "Przedsiębiorca",
    rating: 5,
  },
  {
    quote:
      "Przejrzyste warunki, brak ukrytych kosztów. Po raz pierwszy pożyczka bez stresu.",
    name: "Marcin Nowak",
    role: "Pracownik korporacji",
    rating: 5,
  },
  {
    quote:
      "Świetna obsługa klienta. Odpowiedzieli na wszystkie pytania i pomogli wybrać najlepszą ofertę.",
    name: "Katarzyna Wiśniewska",
    role: "Nauczyciel",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Co mówią nasi klienci
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Dołącz do tysięcy zadowolonych klientów
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, rating }) => (
            <Card
              key={name}
              className="cursor-default transition-all duration-200 hover:shadow-lg hover:border-primary/20"
            >
              <CardContent className="p-6">
                <Quote className="size-10 text-primary/30 mb-4" aria-hidden />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-primary text-primary"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic">&ldquo;{quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
