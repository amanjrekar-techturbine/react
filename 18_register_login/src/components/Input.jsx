import React from "react";
import { useId } from "react";

function Input({ label, type = "text", name, register = () => {}, validation, errors={} }) {
  const id = useId();

  return (
    <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input type={type} id={id} className="form-control form-control-lg" {...register(name, validation)} />

      {errors?.[name] && (<p style={{color: "red"}}>{errors?.[name]?.message}</p>) }
    </div>
  );
}

export default Input;
