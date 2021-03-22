import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type='date'
          min={getTodayString()}
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Time:
        <input
          type='time'
          name='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <ContactPicker contacts={contacts} setContact={setContact} />
      <input type='submit' value='Submit' />
    </form>
  );
};
