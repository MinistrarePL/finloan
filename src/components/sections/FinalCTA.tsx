import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section id="aplikuj" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Gotowy na start?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Złóż wniosek w kilka minut i otrzymaj decyzję natychmiast. Bez
              ukrytych kosztów, bez zbędnych formalności.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto cursor-pointer text-base bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="#aplikuj">Aplikuj teraz</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto cursor-pointer text-base text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
              >
                <a href="#kalkulator">Oblicz ratę</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
