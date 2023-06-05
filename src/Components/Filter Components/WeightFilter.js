import React, { useState } from "react";

const WeightFilter = () => {
  const [type, setType] = useState("");
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="w-100">
      <div className="btn-group btn-group-toggle my-4" data-toggle="buttons">
        <label className="btn font-14 bg-grey active d-flex align-items-center">
          <input
            type="radio"
            name="options"
            id="Grams"
            autoComplete="off"
            readOnly
            checked={type === "Grams"}
            onChange={handleChange}
            value="Grams"
          />
          <span className="pl-2">Grams</span>
        </label>
        <label className="btn font-14 bg-grey d-flex align-items-center">
          <input
            type="radio"
            name="options"
            id="Seeds"
            value="Seeds"
            autoComplete="off"
            checked={type === "Seeds"}
            onChange={handleChange}
          />
          <span className="pl-2">Seeds</span>
        </label>
      </div>

      <div>
        <p className="mb-2 font-weight-600 font-18-100">{type}</p>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div className="checkbox-btn action">
            <label>
              <input type="checkbox" value="1" />
              <span>All</span>
            </label>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center w-100 gap-2">
            <input
              type="range"
              className="form-control-range w-100"
              min="0"
              max="30"
              step="15"
            ></input>
            <p className="rangetext d-flex w-100 justify-content-between">
              <span>1-7 {type === "Seeds" ? "Seeds" : "Grams"}</span>
              <span>7-14 {type === "Seeds" ? "Seeds" : "Grams"}</span>
              <span>14-30 {type === "Seeds" ? "Seeds" : "Grams"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightFilter;
