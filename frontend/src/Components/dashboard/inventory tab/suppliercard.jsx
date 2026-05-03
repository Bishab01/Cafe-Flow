import {Trash2, Phone, Mail, MapPin } from "lucide-react";
import {useState} from 'react';

function SupplierCard({suppliers, deleteSupplier}){

    const [popUp,setPopUp]=useState(false);
    const [selectedSupplier, setSelectedSupplier]=useState(null);

    return(
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {suppliers.map((supplier,index) => (
            <div key={supplier.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                                {supplier.name}
                            </h3>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium text-xs md:text-sm">
                                {supplier.category}
                            </span>
                        </div>

                        <p className="text-slate-600 font-medium mb-3 text-sm md:text-[17px]">
                            {supplier.company}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="flex items-center gap-2 text-slate-600">
                            <Phone size={16} />
                            <span className="text-sm">{supplier.contact}</span>
                            </div>

                            {supplier.email && (
                                <div className="flex items-center gap-2 text-slate-600">
                                <Mail size={16} />
                                <span className="text-sm">{supplier.email}</span>
                                </div>
                            )}
                        
                            <div className="flex items-center gap-2 text-slate-600">
                            <MapPin size={16} />
                            <span className="text-sm">{supplier.address}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() =>{setPopUp(true);
                            setSelectedSupplier(supplier);
                        }}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Delete supplier">
                        <Trash2 className='w-4.5 h-4.5 md:w-5.5 md:h-5.5'/>
                    </button>
                </div>

                {popUp && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white p-7 rounded-xl shadow-lg text-center w-100 flex flex-col items-center justify-center">
                        <p className="font-medium text-lg mb-6">
                        Do you want to remove supplier {selectedSupplier.name} from the system?
                        </p>
                        <div className='flex items-center justify-center gap-5'>
                        <button
                            onClick={() => setPopUp(false)}
                            className="bg-red-500 hover:bg-red-600 text-white text-sm mt-1 font-medium px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={() => {setPopUp(false);
                            deleteSupplier(selectedSupplier.id);
                            }}
                            className="bg-slate-500 hover:bg-slate-600 text-white text-sm mt-1 font-medium px-4 py-2 rounded-lg"
                        >
                            Confirm
                        </button>
                        </div>
                    </div>
                </div>
                )}
            </div>
            ))}
           
        </div>
    )
}

export default SupplierCard