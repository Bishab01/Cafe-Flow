import { useState } from "react"
import { Plus} from 'lucide-react';
import SupplierCard from "./suppliercard";


function Inventory() {

    const [supplierName,setSupplierName]=useState("");
    const [category,setCategory]=useState("");
    const [contactNumber,setContactNumber]=useState("");
    const [email, setEmail]=useState("");
    const [location, setLocation]=useState("");
    const [showForm,setShowForm]=useState(false);
    const [msg,setMsg]=useState("");

    const [suppliers, setSuppliers] = useState([
    {id: 1, name: "Rajesh Sharma", category: "Electronics", company: "Himalayan Tech Supplies", contact: "9812345678", email: "rajesh.sharma@hts.com", address: "Kathmandu, Nepal"},
    {id:2, name: "Kiran Rai", category: "Vegetables", company: "Himal Veggie House", contact: "9823456789", email: "kiran.rai@veggiehouse.com", address: "Biratnagar, Nepal"},
    {id:3, name: "Maya Lama", category: "Poultry", company: "Maya Fresh Poultry", contact: "9856677889", address: "Lalitpur, Nepal"}
    ]);

    const deleteSupplier = (id) => {
        setSuppliers((prev) =>
            prev.filter((res) => res.id !== id)
        );
    };

    const contactRegex=/^9\d{9}$/;
    const nameRegx = /^[a-zA-Z\s]+$/;
    const emailRegx = /^[^\s@]+@[^\s@]+(\.[^\s@]+)+$/;

    const validateSupplierDetails = () => {
        if(!supplierName.trim() || !category.trim() || !contactNumber || !location.trim())
        {
            setMsg("Must fill all the fields with *");
            return;
        }

        if(!nameRegx.test(supplierName))
        {
            setMsg("Supplier name should contain only letters and spaces");
            return;
        }
        
        if(!contactRegex.test(contactNumber))
        {
            setMsg("Invalid contact number");
            return;
        }

        if(email && !emailRegx.test(email))
        {
            setMsg("Invalid email address");
            return;
        }

        setMsg('');
        setSupplierName('');
        setCategory('');
        setEmail('');
        setLocation('');
        setContactNumber('');
        setShowForm(false);
    }

    return(
        <div className="flex-1 min-h-screen p-8 bg-gray-50">

            {/* Header */}
            <div className="flex justify-between gap-3 mb-6">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold">
                        Inventory Management
                    </h1>
                    <p className="text-sm md:text-[15px] text-gray-400 font-medium mt-1">
                        Manage your supplier/dealer information
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-2 py-2 rounded-lg flex items-center
                        gap-1 hover:bg-blue-700"
                        >
                        <Plus className="w-4 h-4 md:w-5 md:h-5"  />
                        <p className="font-medium text-sm md:text-[16px]">Add Supplier</p>
                    </button>
                </div>
            </div>

            {/*Supplier Card*/}
            <SupplierCard
                suppliers={suppliers}
                deleteSupplier={deleteSupplier}
            />

            {showForm && (
                 <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

                    <div className="bg-white p-6 rounded-2xl w-90">
                        <h2 className="text-xl font-bold mb-4">Add Supplier</h2>

                        <div>
                            <p className="font-medium ">*Supplier Name:</p>
                            <input
                            type="text"
                            placeholder="Eg: Ram Bahadur"
                            className="border-2 p-2 mt-2 mb-3 rounded-lg w-full"
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)}
                            />

                            <p className="font-medium ">*Category:</p>
                            <input
                            type="text"
                            placeholder="Eg: Fruits/ Meat/ Poultry..."
                            className="border-2 p-2 mt-2 mb-3 rounded-lg w-full"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            />

                            <p className="font-medium ">*Contact Number:</p>
                            <input
                            type="tel"
                            placeholder="9XXXXXXXXX"
                            className="border-2 p-2 mt-2 mb-3 rounded-lg w-full"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            />

                            <p className="font-medium ">Email Address:</p>
                            <input
                            type="email"
                            placeholder="example@email.com"
                            className="border-2 p-2 mt-2 mb-3 rounded-lg w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <p className="font-medium ">*Location:</p>
                            <input
                            type="text"
                            placeholder="street, city"
                            className="border-2 p-2 mt-2 mb-3 rounded-lg w-full"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <p className="text-gray-500 font-medium text-sm mt-2 mb-3">Note: All the fields with * are required.</p>

                        <p className="text-red-500 font-medium text-sm mt-2 mb-5">{msg}</p>

                        <div className="flex justify-between items-center">
                            <button
                                onClick={()=>setShowForm(false)}
                                className="bg-red-400 text-white font-medium rounded-xl 
                                px-3 py-2 hover:bg-red-500">
                                Cancel
                            </button>

                            <button
                                onClick={validateSupplierDetails}
                                className="px-3 py-2 bg-green-400 text-white font-medium 
                                rounded-xl hover:bg-green-500">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
    );
}

export default Inventory