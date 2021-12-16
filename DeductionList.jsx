import React from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import "./DeductionList.scss";

function DeductionList({ salary }) {
  const tax = salary * 12 * 0.13;
  const equalMonths = Math.floor(260000 / tax);
  const rest = 260000 - equalMonths * tax;

  const counter = (i) => {
    const cases = {
      default: `в ${i}-ый`,
      2: "во 2-ой",
      3: "в 3-ий",
      6: "в 6-ой",
      7: "в 7-ой",
      8: "в 8-ой",
    };
    return cases[i] ? cases[i] + " год" : cases.default + " год";
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
