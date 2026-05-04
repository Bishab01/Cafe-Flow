import {Coffee, Plus, Trash2, CircleX, CircleCheck} from "lucide-react"
import { MdRoomService } from "react-icons/md";
import { FaUtensilSpoon } from "react-icons/fa";
import { FaGlassWater } from "react-icons/fa6";

function MenuItemCard({menuItemsData, toggleAvailability, deleteItem}) {
    return(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
      max-h-150 overflow-y-auto p-3 mb-6 rounded-xl border border-gray-100 ">
        {menuItemsData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl h-fit p-5 shadow-sm">
            
            <div className="flex justify-between mb-3">
              <div className="flex gap-3">
                
                {/* Category based icons */}
                <div className="bg-red-50 p-2 rounded-lg flex items-center justify-center">  
                  {item.category === "Hot Beverage" ? (
                    <Coffee className="w-5 h-5 text-red-500" />
                  ) : 
                  item.category === "Food" ? (
                    <MdRoomService className="w-5 h-5 text-red-500" />
                  ) : 
                  item.category === "Drinks"? (
                    <FaGlassWater className="w-5 h-5 text-red-500" />
                  ) : 
                  (
                    <FaUtensilSpoon className="w-5 h-5 text-red-500" />
                  )}
                </div>
                
                {/* Item name and category */}
                <div>
                  <h3>{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>

              </div>

              <button onClick={() => deleteItem(item.id)}>
                <Trash2 className="w-5 h-5 text-red-400 hover:text-red-600" />
              </button>
            </div>

            <p className="font-medium mb-3">Rs {item.price}</p>

            <div className="flex justify-between">
              
              <button
                /*disabled={!item.available} */
                className="bg-red-500 flex items-center justify-center gap-1 
                rounded-lg px-3 py-1 text-slate-50 font-medium hover:bg-red-600"
              >
                Add to Order
                <Plus className="w-5 h-5" />
              </button>

              {/* Availability toggle */}
              <button 
                onClick={() => toggleAvailability(item.id)}
                className="border border-gray-100 rounded-2xl px-3 py-1 shadow-sm hover:bg-gray-50"
              >
                {item.available ? (
                  <div className="flex items-center text-green-500 gap-1">
                      <CircleCheck className="w-5 h-5 text-green-500" />
                      Available
                  </div>
                ) : (
                  <div className="flex items-center text-red-500 gap-1">
                      <CircleX className="w-5 h-5 text-red-500" />
                      Unavailable
                  </div>
                )}
              </button>

            </div>
          </div>
        ))}
      </div>
    )
}

export default MenuItemCard