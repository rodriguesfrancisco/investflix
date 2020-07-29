import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      {type === 'textarea' && (
        <label>
          {label}
          <textarea type={type} value={value} name={name}
            onChange={onChange} />
        </label>
      )}
      {type !== 'textarea' && (
        <label>
          {label}:
          {' '}
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange} />
        </label>
      )}
    </div>

  )

}

export default FormField;