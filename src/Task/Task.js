import React, { useState } from "react";
import { SelectForm, AlbaButton } from "@platform/service-ui-libraries";

const Task = () => {
  const [city, setCity] = useState("");
  const [required, setRequired] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!city) {
      setRequired(true);
      return;
    }

    alert("You have selected: " + city);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SelectForm
          fieldName="select"
          label="Enter City"
          validationsDetail={{
            validations: {
              required: true,
            },
          }}
          placeholder="Enter City"
          className="select"
          fieldValue={city}
          onChange={(e) => {
            setCity(e);
            setRequired(false);
            console.log(e);
          }}
          options={[
            { label: "None", value: "" },
            { label: "New York", value: "New York" },
            { label: "London", value: "London" },
            { label: "Paris", value: "Paris" },
          ]}
        />
        {required && !city && (
          <p style={{ color: "red" }}>City is required</p>
        )}
        <AlbaButton title="submit" type="submit" variant="primary">
          Submit
        </AlbaButton>
      </form>
    </div>
  );
};

export default Task;
