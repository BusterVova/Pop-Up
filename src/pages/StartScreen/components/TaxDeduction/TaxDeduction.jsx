import React, { useState, useMemo, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import TagGroup from "../../../../components/Tag/TagGroup";
import DeductionList from "../DeductionList/DeductionList";
import "./TaxDeduction.scss";
import { SalarySchema } from "../../../../validation/salaryValidation";

function TaxDeduction({ onCloseModal, setSalaryPopUp }) {
  const [calculated, setCalculated] = useState(false);
  const [salary, setSalary] = useState({ value: "" });
  const [submittedSalary, setSubmittedSalary] = useState({ value: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedSalary({ value: +salary.value });
    setCalculated(true);
  };
  const validate = () => {
    SalarySchema.validate(submittedSalary)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [submittedSalary]);

  const isValid = Object.keys(errors).length === 0;
  console.log(isValid);
  const handleSalary = (e) => {
    setSalary({ value: e.target.value });
  };

  const tabs = useMemo(
    () => [
      {
        name: "Платёж",
        value: "Платёж",
      },
      {
        name: "Срок",
        value: "Срок",
      },
    ],
    []
  );

  return (
    <>
      <h3 className="deduction__header">Налоговый вычет</h3>
      <p className="deduction__paragraph">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          submittedSalary={submittedSalary}
          errorMessage={errors.value}
          label="Ваша зарплата в месяц"
          onChange={handleSalary}
          placeholder="Введите данные"
        />
        <Button type="submit" variant="text" className="deduction__count">
          Рассчитать
        </Button>
      </form>
      {calculated && isValid && (
        <DeductionList salary={submittedSalary.value} />
      )}
      <div className="deduction-decrease">
        <h4 className="deduction-decrease__header">Что уменьшаем?</h4>
        <TagGroup tabs={tabs} />
      </div>
      <div className="deduction-add">
        <Button
          fullWidth
          variant="contained"
          size="big"
          onClick={onCloseModal}
          className={"button-add"}
        >
          Добавить
        </Button>
      </div>
    </>
  );
}

export default TaxDeduction;
