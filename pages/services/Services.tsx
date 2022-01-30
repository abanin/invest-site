import { useRef, useState } from "react";
import cn from "classnames";
import Button from "invest-kit/hydrogen/Button";
import Card from "invest-kit/hydrogen/Card";
import SliderInput from "invest-kit/hydrogen/SliderInput";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import H2 from "@/components/H2";
import Header from "@/components/Header";
import Section from "@/components/Section";

import styles from "./styles.module.scss";

enum Currency {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}
const CURRENCY = {
  [Currency.RUB]: {
    sign: "₽",
  },
  [Currency.USD]: {
    sign: "$",
  },
  [Currency.EUR]: {
    sign: "€",
  },
};

interface Calculations {
  full: number;
  percentageProfit: number;
  investments: number;
}

const RESULTS: { title: string; key: keyof Calculations }[] = [
  {
    title: "Результат инвестирования",
    key: "full",
  },
  {
    title: "Размер процентного дохода",
    key: "percentageProfit",
  },
  {
    title: "Сумма всех вложений",
    key: "investments",
  },
];

const Services = () => {
  // TODO: this should be a separate page/section
  const resultsRef = useRef<HTMLDivElement>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(Currency.RUB);
  const [calculated, setCalculated] =
    useState<{ full: number; percentageProfit: number; investments: number }>();

  const [values, setValues] = useState({
    startAmount: "0",
    monthlyDeposit: "0",
    profit: "5",
    period: "1",
  });

  const updateValue = (key: string) => (value: string) => {
    setValues({ ...values, [key]: value });
  };

  const handleCalculations = () => {
    const { startAmount, monthlyDeposit, period, profit } = values;

    const arr = new Array(Number(period)).fill("1");

    const res = arr.reduce(
      (result, _item) => {
        const { full, percentageProfit, investments } = result;
        const deposited = 12 * Number(monthlyDeposit);
        const prcProfit = ((full + deposited) * Number(profit)) / 100;

        return {
          full: full + 12 * Number(monthlyDeposit) + prcProfit,
          percentageProfit: percentageProfit + prcProfit,
          investments: investments + deposited,
        };
      },
      { full: Number(startAmount), percentageProfit: 0, investments: Number(startAmount) },
    );

    setCalculated(res);

    // TODO: fix scroll for initial calculation
    scrollTo({ top: resultsRef.current?.offsetTop || 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />

      <Container>
        <Section>
          <H2 className={styles.title}>Калькулятор сложных процентов с пополнением</H2>
          <Button>Перейти ко всем калькуляторам</Button>
        </Section>
        <Section>
          <div className={styles["currency-title"]}>Валюта</div>
          <div className={styles["currency-list"]}>
            {[Currency.RUB, Currency.EUR, Currency.USD].map((currency) => (
              <Button
                key={currency}
                className={cn(
                  styles.currency,
                  selectedCurrency === currency && styles["currency-active"],
                )}
                onClick={() => setSelectedCurrency(currency)}
              >
                {currency}
              </Button>
            ))}
          </div>
        </Section>
        <Section>
          {/* // TODO: make it dynamic */}
          <div className={styles.row}>
            <SliderInput
              value={values.startAmount}
              label={<>Начальная сумма, {CURRENCY[selectedCurrency].sign}</>}
              onChange={updateValue("startAmount")}
              max={100000000}
              step={10000}
              min={0}
              rangeInfoText={{
                start: `от 0 ${CURRENCY[selectedCurrency].sign}`,
                end: `до 100 000 000 ${CURRENCY[selectedCurrency].sign}`,
              }}
            />
            <SliderInput
              value={values.monthlyDeposit}
              label={<>Ежемесячное пополнение, {CURRENCY[selectedCurrency].sign}</>}
              onChange={updateValue("monthlyDeposit")}
              max={1000000}
              step={10000}
              min={0}
              rangeInfoText={{
                start: `от 0 ${CURRENCY[selectedCurrency].sign}`,
                end: `до 1 000 000  ${CURRENCY[selectedCurrency].sign}`,
              }}
            />
          </div>
          <div className={styles.row}>
            <SliderInput
              value={values.profit}
              label={<>Среднегодовая доходность, %</>}
              onChange={updateValue("profit")}
              max={100}
              min={0}
              rangeInfoText={{
                start: "от 0 %",
                end: "до 100 %",
              }}
            />
            <SliderInput
              value={values.period}
              label={<>Срок инвестирования, лет</>}
              onChange={updateValue("period")}
              max={100}
              min={1}
              rangeInfoText={{
                start: "от 1 года",
                end: "до 100 лет",
              }}
            />
          </div>
          <div className={styles["calculate-button"]}>
            <Button onClick={handleCalculations}>Рассчитать</Button>
          </div>
        </Section>
        <div ref={resultsRef} id="results">
          {calculated && (
            <Section>
              <H2 className={styles.title}>Результат</H2>

              <div style={{ display: "flex" }}>
                {RESULTS.map(({ title, key }) => (
                  <Card className={styles.card} key={key}>
                    <div className={styles["card-title"]}>{title}</div>
                    <div className={cn(styles["card-amount"], styles["card-amount--primary"])}>
                      {Math.round(calculated[key]).toLocaleString()}{" "}
                      {CURRENCY[selectedCurrency].sign}
                    </div>
                  </Card>
                ))}
              </div>
            </Section>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Services;
