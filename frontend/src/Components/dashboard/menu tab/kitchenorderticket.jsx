import { useState } from "react";
import { Plus, Minus,} from "lucide-react";

function KitchenOrderTicket() {
    const [location, setLocation] = useState("table");
    const [tableNumber, setTableNumber] = useState("");
    const [roomNumber, setRoomNumber] = useState("");
    const [guestName, setGuestName] = useState("");
    const [customization, setCustomization] = useState("");

    return(
    <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-white rounded-2xl shadow-sm p-6'>
            <div className='flex flex-col'>
            
                <h3 className='font-semibold text-[19px] mb-6'>
                    Create Order
                </h3>

                <div className="flex items-center gap-2 font-medium mb-4">
                    Order For:
                    <input type="radio" name="location" value="table"
                    checked={location==="table"}
                    onChange={(e)=>setLocation(e.target.value)}
                    /> Table 

                    <input type="radio" name="location" value="room"
                    checked={location==="room"}
                    onChange={(e)=>setLocation(e.target.value)}
                    /> Room 
                </div>

                <p className='mb-2 text-[16px]'>{location==="table"?"Table":"Room"} Number:</p>
                <input
                    type="number"
                    placeholder={location==="table"?"Enter table number":"Enter room number"}
                    value={location==="table"? tableNumber : roomNumber}
                    onChange={(e) => location==="table" 
                        ? setTableNumber(e.target.value) 
                        : setRoomNumber(e.target.value)
                    }
                    className='border rounded-lg p-2 mb-4'
                />

                <p className='mb-2 text-[16px]'>Guest Name:</p>
                <input
                    type="text"
                    placeholder="Enter guest name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className='border rounded-lg mb-4 p-2'
                />

                <p className='mb-2 text-[16px]'>Customization:</p>
                <textarea
                    placeholder="Food customization request here (optional)"
                    value={customization}
                    onChange={(e) => setCustomization(e.target.value)}
                    className='border rounded-lg mb-4 p-2 w-full'
                />

            {/* {cart.map((item) => (
                <div key={item.id} className='mt-3 mb-3 flex items-center font-medium gap-8 text-[16.5px] justify-between text-gray-700'>
                {item.name} x {item.quantity}
                    <div className="flex items-center gap-4">
                        <button onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className='w-4.5 h-4.5'/>
                        </button>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className='w-4.5 h-4.5'/>
                        </button>
                    </div>
                </div>
            ))} */}

                <p className='mt-4 text-[16px] font-semibold mb-4 border-t border-dashed border-gray-700 pt-3'>
                    Total: Rs 10
                </p>

                <div className='flex items-center justify-center'>                
                    <button 
                    className='bg-green-500 font-medium rounded-xl text-white w-fit px-5 py-1.5
                    hover:bg-green-400 text-lg'>
                    Finalize Order
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default KitchenOrderTicket