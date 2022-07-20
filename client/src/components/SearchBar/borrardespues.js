import {
  Formik,
  Field,
  ErrorMessage,
  useFormikContext,
  useField,
} from "formik";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        console.log("antes de valString", val);
        const valString = val ? val.toISOString().slice(0, 10) : null;
        setFieldValue(field.name, valString);
        console.log("sali de DatePickerField", valString);
      }}
    />
  );
};


//esto en petCreate


<DatePickerField
  name="foundDate"
  isClearable
  showYearDropdown
  scrollableMonthYearDropdown
  maxDate={new Date()}
  dateFormat="yyyy/MM/dd"
/>;





//Primera version

import React, { useState } from "react";
import Creatable from "react-select/creatable";

export default function Supliers({ options }) {
  const [selectedSupplier, setSelectedSupplier] = useState();

  const handleSelectChange = ({ value }) => {
    setSelectedSupplier(value);
  };

  return (
    <div>
      <Creatable
        isClearable
        defaultValue={{ label: "Selecciona tu respuesta" }}
        options={options.map((br) => ({ label: br, value: br }))}
        onChange={handleSelectChange}
        /* onInputChange={console.log("onInputChange")} */
      />
    </div>
  );
}
