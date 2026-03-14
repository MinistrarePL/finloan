import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Calculator as CalculatorIcon } from "lucide-react"

const ANNUAL_RATE = 0.079 // 7.9% RRSO
const MIN_AMOUNT = 5000
const MAX_AMOUNT = 150000
const MIN_TERM = 6
const MAX_TERM = 84

function calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
  if (principal <= 0 || months <= 0) return 0
  const monthlyRate = annualRate / 12
  if (monthlyRate === 0) return principal / months
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  )
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function Calculator() {
  const [amount, setAmount] = useState(50000)
  const [term, setTerm] = useState(24)

  const monthlyPayment = calculateMonthlyPayment(amount, ANNUAL_RATE, term)
  const totalRepayment = monthlyPayment * term
  const totalInterest = totalRepayment - amount

  return (
    <section id="kalkulator" className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Kalkulator pożyczki
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Sprawdź orientacyjną ratę miesięczną
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-2xl">
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <CalculatorIcon className="size-5" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Oblicz ratę</h3>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="amount" className="text-sm font-medium">
                    Kwota pożyczki
                  </label>
                  <Input
                    id="amount"
                    type="number"
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step={1000}
                    value={amount}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10)
                      if (!isNaN(val)) setAmount(Math.min(MAX_AMOUNT, Math.max(MIN_AMOUNT, val)))
                    }}
                    className="w-32 text-end"
                  />
                </div>
                <Slider
                  value={[amount]}
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  step={1000}
                  onValueChange={([v]) => setAmount(v)}
                  aria-label="Kwota pożyczki"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="term" className="text-sm font-medium">
                    Okres spłaty (miesięcy)
                  </label>
                  <Input
                    id="term"
                    type="number"
                    min={MIN_TERM}
                    max={MAX_TERM}
                    step={1}
                    value={term}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10)
                      if (!isNaN(val)) setTerm(Math.min(MAX_TERM, Math.max(MIN_TERM, val)))
                    }}
                    className="w-20 text-end"
                  />
                </div>
                <Slider
                  value={[term]}
                  min={MIN_TERM}
                  max={MAX_TERM}
                  step={1}
                  onValueChange={([v]) => setTerm(v)}
                  aria-label="Okres spłaty"
                />
              </div>

              <Separator />

              <div className="space-y-4 rounded-lg bg-muted/50 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rata miesięczna</span>
                  <span className="font-semibold text-lg">
                    {formatCurrency(monthlyPayment)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Suma odsetek</span>
                  <span>{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Całkowita kwota do spłaty</span>
                  <span className="font-medium">{formatCurrency(totalRepayment)}</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                * Kalkulacja orientacyjna. RRSO 7,9% (w skali roku). Ostateczna oferta zależy od
                indywidualnej oceny.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
