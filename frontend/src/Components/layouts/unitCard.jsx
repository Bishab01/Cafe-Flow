import { X, UtensilsCrossed, DoorClosed, DoorClosedLocked, DoorOpen} from "lucide-react";
import { useState } from "react";

function UnitCard({ unit, onDelete, openStatusForm}) {
  const status = unit.status;
  const type = unit.type;
  const [showPopUp,setShowPopUp]=useState(false);

  return (
    <div className="relative group">

      {/* Delete button */}
      <button
        onClick={() => setShowPopUp(true)}
        className="absolute -top-2.5 -right-2.5 z-10 
        w-6 h-6 rounded-full bg-gray-700 hover:bg-red-500 text-white
        opacity-0 group-hover:opacity-100 transition-opacity shadow-md
        grid place-items-center"
      >
        <X className="w-3 h-3" />
      </button>

      {/* Card */}
      <div 
        onClick={openStatusForm}
        className={`w-32 h-44 aspect-square rounded-lg flex flex-col items-center 
        justify-center p-4 hover:scale-103 transition-all shadow-sm
        ${status === "Available" ? "bg-green-400" 
            : status === "Reserved" ? "bg-blue-400"
              : status === "Occupied" ? "bg-red-400" : "bg-orange-400"}
        `}>

        {type === "room" && (
          status === "Available" ?
          <DoorOpen className="w-8 h-8 text-white" />: 
          (status === "Reserved" || status === "Occupied")? 
          <DoorClosedLocked className="w-8 h-8 text-white" />:
          <DoorClosed className="w-8 h-8 text-white" />
        )}

        {type === "table" && (
            <UtensilsCrossed className="w-8 h-8 text-white" />
          )
        }
        

        <p className="text-white font-medium mt-1">
          {type === "room" ? "Room" : "Table"} {unit.number}
        </p>

        <p className="text-white font-medium text-sm">
          {type === "room"
            ? `${unit.capacity===1? `${unit.capacity} bed`:`${unit.capacity} beds`}`
            : `${unit.capacity===1? `${unit.capacity} seat`:`${unit.capacity} seats`}`}
        </p>

        <p className="text-white mt-2 mb-1 font-medium text-sm">
          {unit.status}
        </p>

      </div>

       <div class="absolute top-25 -left-6 opacity-0 group-hover:opacity-90 transition-opacity 
       duration-600 border border-gray-200 shadow-sm font-medium bg-gray-100 text-gray-800 text-sm p-2 rounded-lg">
          {unit.status ==="Available" && (
            <p>This {unit.type==="room"? "room": "table"} is available to be assigned to guests.</p>
          )}

          {(status ==="Cleaning" && unit.type==="room") && (
            <p>This room is getting cleaned.</p>
          )}

          {unit.status ==="Occupied" && (
            <div>
              <p>Occupied by: Name</p>
              <p>Contact No: 9999999999</p>
              <p>Date: 2062-02-01</p>
            </div>
          )}

          {unit.status ==="Reserved" && (
            <div>
              <p>Reserved by: Name</p>
              <p>Contact No: 9999999999</p>
              <p>{unit.type==="room"?"Check-in Date:":"Date:"} Date</p>
              <p>{unit.type==="room"?"Check-in Time:":"Arrival Time:"} Time</p>
            </div>
          )}
        </div>

      {showPopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-5 rounded-xl shadow-lg text-center h-40 w-80 flex flex-col items-center justify-center">
            <p className="font-medium text-lg mb-6">
              Really want to delete {unit.type === "table"? "Table":"Room"} {unit.number}?
            </p>

            <div className="flex items-center gap-6"> 
              <button
                onClick={() => setShowPopUp(false)}
                className="bg-red-500 text-white text-sm mt-1 font-medium px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>

              <button
                onClick={() => {setShowPopUp(false);
                  onDelete(unit.id);
                }}
                className="bg-gray-600 text-white text-sm mt-1 font-medium px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default UnitCard