import { getMonth, getYear } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerCustomProps {
  setDateOfBirth: (date: Date) => void;
}

function range(start: number, end: number, step: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

export default function DatePickerCustom({ setDateOfBirth }: DatePickerCustomProps) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const years = range(1960, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date !== null) setDateOfBirth(date);
  };

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(Number(value))}>
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select value={months[getMonth(date)]} onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => handleDateChange(date)}
      className="w-full py-3 px-6 bg-white rounded-full shadow-md border-gray-200 border-2 text-primary-blue"
    />
  );
}
