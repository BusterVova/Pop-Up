import * as yup from "yup";

export const SalarySchema = yup.object().shape({
  value: yup
    .string()
    .required("Поле обязательно для заполнения")
    .matches(/(?=.{5,})/, "Число должно быть 5-ти значным"),
});
