import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Jakie dokumenty są potrzebne do złożenia wniosku?",
    answer:
      "Potrzebujesz dowodu osobistego, zaświadczenia o dochodach (np. umowa o pracę, PIT) oraz dokumentu potwierdzającego adres zamieszkania. W przypadku pożyczek biznesowych wymagane są dodatkowe dokumenty firmowe.",
  },
  {
    question: "Ile trwa rozpatrzenie wniosku?",
    answer:
      "Większość wniosków jest rozpatrywana automatycznie w czasie rzeczywistym. W przypadku weryfikacji manualnej proces może potrwać do 24 godzin roboczych.",
  },
  {
    question: "Kiedy otrzymam pieniądze na konto?",
    answer:
      "Przy pozytywnej decyzji środki są przekazywane w ciągu 15 minut do 24 godzin, w zależności od banku i godziny złożenia wniosku. Przelewy w weekendy mogą być realizowane w następny dzień roboczy.",
  },
  {
    question: "Czy mogę wcześniej spłacić pożyczkę?",
    answer:
      "Tak. Wczesna spłata jest możliwa w dowolnym momencie bez dodatkowych opłat. Możesz również skorzystać z częściowej wcześniejszej spłaty.",
  },
  {
    question: "Jaki jest minimalny i maksymalny wiek wnioskodawcy?",
    answer:
      "Pożyczkę może uzyskać osoba w wieku 18–75 lat, posiadająca pełną zdolność do czynności prawnych i stałe źródło dochodu.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Często zadawane pytania
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Odpowiedzi na najczęstsze pytania
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger className="text-start cursor-pointer">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
