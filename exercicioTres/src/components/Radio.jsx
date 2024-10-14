/* eslint-disable react/prop-types */

function Radio({ pergunta, options, onChange, value, id, active }) {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {options.map((option) => (
          <label
            key={option}
            style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
          >
            <input
              type="radio"
              id={id}
              checked={value === option}
              value={option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default Radio;
