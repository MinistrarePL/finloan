import { Button } from "@/components/ui/button"
import { Shield, Lock, Star } from "lucide-react"

const trustBadges = [
  { icon: Shield, label: "Licencjonowany pożyczkodawca" },
  { icon: Lock, label: "Szyfrowanie 256-bit" },
  { icon: Star, label: "Ocena 4.9" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute end-0 top-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute start-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Szybkie i przejrzyste{" "}
            <span className="text-primary">pożyczki</span> na Twoje cele
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Uzyskaj decyzję w kilka minut. Przejrzyste warunki, konkurencyjne
            oprocentowanie. Bez ukrytych kosztów.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto cursor-pointer text-base"
            >
              <a href="#aplikuj">Aplikuj teraz</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto cursor-pointer text-base"
            >
              <a href="#kalkulator">Oblicz ratę</a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Icon className="size-5 text-primary" aria-hidden />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
