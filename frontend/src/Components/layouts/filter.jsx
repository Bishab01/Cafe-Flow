import { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Filter({ data, onApply, onReset, nameField, dateField}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);

  const handleApply = () => {
    const filtered = data.filter((item) => {
      const itemName = nameField ? item[nameField] || "" : "";
      const itemDate = dateField ? item[dateField] || "" : "";

      const matchName = nameField && name
        ? itemName.toLowerCase().includes(name.toLowerCase())
        : true;

      const matchDate = dateField && date
        ? itemDate === date.toLocaleDateString("en-CA")
        : true;

      return matchName && matchDate;
    });

    onApply(filtered);
    onReset();
  };

  const handleReset = () => {
    setName("");
    setDate(null);
    onApply(data);
    onReset();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-90 p-5 rounded-xl shadow-lg">

        <h2 className="text-lg font-bold mb-4">Filter Records</h2>

        {/* Name */}
        {nameField && 
        (<input
          type="text"
          placeholder="Search by name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />
        )}

        {/* Date */}
        {dateField && (
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Search by date..."
            className="w-full mb-3 px-4 py-2 border rounded-lg"
            wrapperClassName="w-full"
          />
        )}
        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="w-full font-medium bg-gray-100 py-2 rounded-lg"
          >
            Reset
          </button>

          <button
            onClick={handleApply}
            className="w-full font-medium bg-blue-500 text-white py-2 rounded-lg"
          >
            Apply
          </button>
        </div>

      </div>
    </div>
  );
}

export default Filter;