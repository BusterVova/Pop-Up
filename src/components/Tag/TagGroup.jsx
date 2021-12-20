import React, { useState } from "react";
import Tag from "./Tag";
import "./TagGroup.scss";
const TagGroup = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0].value);

  const handleChange = (e) => {
    setActive(e.target.value);
  };

  return (
    <div className="tag-container">
      {tabs.map((tab) => {
        return (
          <Tag
            key={tab.value}
            onChange={handleChange}
            active={active}
            name={tab.name}
            value={tab.value}
          />
        );
      })}
    </div>
  );
};

export default TagGroup;
