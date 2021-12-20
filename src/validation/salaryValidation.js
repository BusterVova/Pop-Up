import * as yup from "yup";

export const SalarySchema = yup.object().shape({
  value: yup
    .string()
    .matches(
      /(?=.{4,})/,
      "Некорректная длина ввода. Минимум 4, максимум 10. Например: 1000"
    ),
});
