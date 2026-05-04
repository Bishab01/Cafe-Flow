import { useState } from "react"

function NewItemForm({onConfirm,onCancel})
{
  const [itemName,setItemName]=useState("");
  const [itemCategory, setItemCategory]=useState("");
  const [price, setPrice]=useState(0);
  const [msg, setMsg]=useState("");
  const categories=["Food","Dessert","Hot Beverage","Drinks"]
  const nameRegx = /^[a-zA-Z\s]+$/;

  const validateItemForm = () => {
    if(!itemName.trim() || !itemCategory || price<=0)
      {
        setMsg("All fields are required");
        return;
      }

    if(!nameRegx.test(itemName))
      {
        setMsg("Item Name can only contain letters and spaces");
        return;
      }

    onConfirm(itemName,itemCategory,price);
    setMsg("");
    setItemName("");
    setItemCategory("");
    setPrice(0);
  }

return(
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-2xl w-90">
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>

        <p className="text-lg font-medium text-gray-600 mb-2">Item Name</p>
        <input
          type="text"
          placeholder="Enter Item Name"
          className="border rounded-xl p-2 mb-3 w-full"
          onChange={(e)=>setItemName(e.target.value)}
        />

        <p className="text-lg font-medium text-gray-600 mb-2">Item Category</p>
        <select
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
            className="w-full mb-3 border rounded-xl p-2 ">
            <option value="" hidden>Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

        <p className="text-lg font-medium text-gray-600 mb-2">Price (Rs)</p>
        <input
          type="number"
          placeholder="Set price of the item"
          className="border rounded-xl p-2 mb-3 w-full"
          onChange={(e)=>setPrice(Number(e.target.value))}
        />

        <p className="text-red-500 font-medium text-sm mb-6">{msg}</p>

        <div className="flex justify-between items-center">
          <button
            onClick={onCancel}
            className="bg-red-400 text-white font-medium rounded-xl 
            px-3 py-2 hover:bg-red-500">
            Cancel
          </button>

          <button
            onClick={validateItemForm}
            className="px-3 py-2 bg-green-400 text-white font-medium 
            rounded-xl hover:bg-green-500">
            Confirm
          </button>
        </div>

      </div>

    </div>
) 
}

export default NewItemForm