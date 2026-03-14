import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "10 000+", label: "Zadowolonych klientów" },
  { value: "98%", label: "Wskaźnik akceptacji" },
  { value: "500 mln zł+", label: "Wypłaconych środków" },
  { value: "4.9/5", label: "Średnia ocena" },
]

export function Stats() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map(({ value, label }) => (
            <Card
              key={label}
              className="cursor-default transition-all duration-200 hover:shadow-md hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl">
                  {value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
