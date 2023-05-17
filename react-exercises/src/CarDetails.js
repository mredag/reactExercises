import React, { useEffect, useRef } from 'react';

function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const carDetails = {
      model: form.elements.model.value,
      year: form.elements.year.value,
      color: form.elements.color.value,
    };
    console.log(carDetails);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        Model:
        <input name="model" defaultValue={initialData?.model} />
      </label>
      <label>
        Year:
        <input name="year" type="number" defaultValue={initialData?.year} />
      </label>
      <label>
        Color:
        <input name="color" defaultValue={initialData?.color} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CarDetails;
