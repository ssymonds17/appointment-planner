import React from 'react';

export const ContactPicker = (props) => {
  const { contacts, setContact } = props;
  let names = contacts.map((item) => item.name);
  return (
    <label>
      Contact:
      <select onChange={(e) => setContact(e.target.value)}>
        <option key='0' selected value='none'>
          None
        </option>
        {names &&
          names.map((name, index) => {
            return (
              <option key={index + 1} value={name}>
                {name}
              </option>
            );
          })}
      </select>
    </label>
  );
};
