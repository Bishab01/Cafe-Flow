import { Plus } from "lucide-react";
import AddUnit from "../layouts/addunit.jsx";
import UnitCard from "../layouts/unitCard.jsx";
import StatusForm from "../layouts/statusform.jsx";
import { useState, useContext } from "react";
import { UnitContext } from "../../context/cafeContext.jsx";

function Tables() {
  const [showForm, setShowForm] = useState(false);
  const [activeTable, setActiveTable] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const { units, addUnit, updateUnit, deleteUnit } = useContext(UnitContext);

  const handleAddTable = (type, number, capacity) => {
    const success = addUnit({
    type: type,
    number: number,
    capacity: capacity,
    });

    if (!success) {
      alert("Table already exists");
    }
  };

  const handleUpdate = (id, status, customerName) => {
    updateUnit(id, status, customerName);
  };

  const handleDelete = (id) => {
    deleteUnit(id);
  };

  //for filtering tables from units
  const tables = units.filter((u) => u.type === "table");

  return (
    <div className="flex-1 min-h-screen p-8 bg-gray-50">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Table Management
          </h1>

          <p className="text-[15px] text-gray-400 font-medium mt-1">
            Manage table availability and reservations  
          </p>      
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-2 py-2 rounded-lg flex items-center
            gap-1 hover:bg-blue-700">
            <Plus className="w-5 h-5" />
            <p className="font-medium">Add Table</p>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg w-full shadow-sm font-medium">
          <p className="text-gray-600 text-sm mb-1 ">Total Tables</p>
          <p className="text-gray-900">{tables.length}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg w-full shadow-sm font-medium">
          <p className="text-green-700 text-sm mb-1">Available</p>
          <p className="text-green-900">{tables.filter((t) => t.status === "Available").length}</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg w-full shadow-sm font-medium">
          <p className="text-blue-700 text-sm mb-1">Reserved</p>
          <p className="text-blue-900">{tables.filter((t) => t.status === "Reserved").length}</p>
        </div>

        <div className="bg-red-50 p-4 rounded-lg w-full shadow-sm font-medium">
          <p className="text-red-700 text-sm mb-1">Occupied</p>
          <p className="text-red-900">{tables.filter((t) => t.status === "Occupied").length}</p>
        </div>
      </div>

      {/* Table Info Form */}
      {showForm && (
        <AddUnit
          type="table"
          onClose={() => setShowForm(false)}
          onConfirm={(type, number, capacity) => {
          handleAddTable(type, number, capacity);
          setShowForm(false);
          }}
        />
      )}

      {/* Status Inquiry Form */}
      {activeTable && (
        <StatusForm
          unit={activeTable}
          onClose={() => setActiveTable(null)}
          onConfirm={(status, customerName) => {
          handleUpdate(activeTable.id, status, customerName);
          setActiveTable(null);
          }}
        />
      )}

      {/* Table List */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-bold text-[17px]">
            All tables
          </h3>

          <div className="flex gap-3">
            <div className="flex items-center justify-center gap-1">
              <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
              <p className="font-medium text-sm">Available</p>
            </div>

            <div className="flex items-center justify-center gap-1">
              <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
              <p className="font-medium text-sm">Reserved</p>
            </div>

            <div className="flex items-center justify-center gap-1">
              <div className="w-4 h-4 bg-red-400 rounded-sm"></div>
              <p className="font-medium text-sm">Occupied</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          {tables.length === 0 ? (
            <p className="text-gray-500 w-full text-center p-3">
              No tables added yet
            </p>
          ) : (
            [...tables]
            .sort((a, b) => a.number - b.number)
            .map((table) => (
              <UnitCard
                key={table.id}
                unit={table}
                onDelete={()=>handleDelete(table.id)}
                openStatusForm={() => setActiveTable(table)}
              />
            ))
          )}
        </div>
      </div>
      
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-5 rounded-xl shadow-lg text-center">
            <p className="font-medium mb-4">
              Table number already exists
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    
    </div>
  );
}

export default Tables