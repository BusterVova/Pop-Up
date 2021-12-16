import React from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import "./DeductionList.scss";

function DeductionList({ salary }) {
  const tax = salary * 12 * 0.13;
  const equalMonths = Math.floor(260000 / tax);
  const rest = 260000 - equalMonths * tax;

  const counter = (i) => {
    const n = i % 10;
    return n === 3
      ? `в ${i}-ий год`
      : i === 2
      ? `во ${i}-ой год`
      : i === 6
      ? `в ${i}-ой год`
      : i === 7
      ? `в ${i}-ой год`
      : i === 8
      ? `в ${i}-ой год`
      : `в ${i}-ый год`;
  };
  return (
    <div>
      <h4 className="deduction-list__header">
        Итого можете внести в качестве досрочных:
      </h4>
      <ul className="deduction-list">
        {Array.from({ length: equalMonths }).map((_, idx) => {
          return (
            <li key={idx} className="list_element">
              <Checkbox
                label={() => (
                  <>
                    {tax} рублей &thinsp;
                    <span className="grey-text">{counter(idx + 1)}</span>
                  </>
                )}
              />
            </li>
          );
        })}
        {rest ? (
          <li className="list_element">
            <Checkbox
              label={() => (
                <>
                  {rest} рублей &thinsp;
                  <span className="grey-text">{counter(equalMonths + 1)}</span>
                </>
              )}
            />
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default DeductionList;
