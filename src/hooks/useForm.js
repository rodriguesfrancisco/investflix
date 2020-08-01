import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evento) {
    const { value } = evento.target;
    const key = evento.target.getAttribute('name');
    setValue(key, value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return { values, handleChange, clearForm };
}

export default useForm;
