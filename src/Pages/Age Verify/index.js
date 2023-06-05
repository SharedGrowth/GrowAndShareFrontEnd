import React, { useState } from "react";
import DatePicker from "react-date-picker";
import CalendarIcon from "../../assets/Images/Calendar";
import { useNavigate } from "react-router-dom";

const AgeVerifyPage = () => {
  const [value, onChange] = useState();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/address");
  };
  return (
    <div className="max-width-521">
      <h2 className="auth-model-heading mb-4">Confirm Your Age</h2>
      <p className="auth-model-desc mb-5">
        You must be of legal age to consume cannabis in your province or state
        of residence to enter our app. By clicking “Enter”, You confirm that you
        are of legal age to consume cannabis in the province or state you
        reside.
      </p>
      <form onSubmit={(e) => submitHandler(e)}>
        <select className="auth-input my-3" required>
          <option value="">Where are you from?</option>
          <option value="18">Alberta</option>
          <option value="21">Alaska</option>
          <option value="21">Arizona</option>
          <option value="19">British Columbia</option>
          <option value="19">California</option>
          <option value="21">Colorado</option>
          <option value="21">Connecticut</option>
          <option value="21">Illinois</option>
          <option value="21">Maine</option>
          <option value="21">Massachusetts</option>
          <option value="21">Michigan</option>
          <option value="21">Montana</option>
          <option value="19">Manitoba</option>
          <option value="21">Nevada</option>
          <option value="21">New Jersey</option>
          <option value="21">New Mexico</option>
          <option value="21">New York</option>
          <option value="19">New Brunswick</option>
          <option value="19">Newfoundland &amp; Labrador</option>
          <option value="19">Northwest Territories</option>
          <option value="19">Nova Scotia</option>
          <option value="19">Nunavut</option>
          <option value="19">Ontario</option>
          <option value="21">Oregon</option>
          <option value="19">Prince Edward Island</option>
          <option value="21">Quebec</option>
          <option value="21">Vermont</option>
          <option value="21">Virginia</option>
          <option value="21">Washington</option>
          <option value="19">Saskatchewan</option>
          <option value="19">Yukon</option>
        </select>
        <DatePicker
          onChange={onChange}
          value={value}
          className="auth-input"
          clearIcon={false}
          format="y-M-d"
          dayPlaceholder="DD"
          yearPlaceholder="YYYY"
          monthPlaceholder="MM"
          calendarIcon={<CalendarIcon />}
          required={true}
        />
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between mt-5">
          <button className="green-btn-outline" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="green-btn">Next</button>
        </div>
      </form>
    </div>
  );
};

export default AgeVerifyPage;
