export default function CounterValue({ value, step }) {
  return (
    <p className={value === 10 ? "maximum" : value === 0 ? "minimum" : ""}>
      Значение: {value}, Шаг: {step}
    </p>
  );
}
