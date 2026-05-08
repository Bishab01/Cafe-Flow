import { ClipboardClock, SlidersHorizontal, Minus} from 'lucide-react'
import Filter from '../../layouts/filter'
import { useState, useEffect } from 'react'

function FinancialHistory({financialHistory}){

    const [showFilter, setShowFilter] = useState(false);
    const [filteredData, setFilteredData] = useState(financialHistory);

    useEffect(() => {
        setFilteredData(financialHistory);
    }, [financialHistory]);

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 mb-6">
            <div className='flex justify-between p-6 border-b border-gray-100 '>
                <div className="flex items-center gap-2">
                    <ClipboardClock className="w-4.5 h-4.5 md:w-5 md:h-5 text-red-500" />
                    <h3  className="font-bold text-[17px] md:text-[19px] ">
                    Financial & Operations History
                    </h3>
                </div>

                <button 
                className='flex items-center gap-1 text-gray-600 hover:text-black' 
                onClick={() => setShowFilter(!showFilter)}
                >
                    Filter
                    <SlidersHorizontal className='w-5 h-5'/>
                </button>
            </div>

            <div className="w-full overflow-x-auto">
            {filteredData.length===0?(
                <div className='text-gray-500 font-medium text-center text-lg p-4 mb-3'>
                    No history to display
                </div>):
            (<table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-5 text-left text-gray-600 font-medium text-sm">
                            #
                        </th>
                        <th className="px-6 py-5 text-left text-gray-600 font-medium text-sm">
                            Date
                        </th>
                        <th className="px-6 py-5 text-left text-gray-600 font-medium text-sm">
                            Total Revenue
                        </th>
                        <th className="px-6 py-5 text-left text-gray-600 font-medium text-sm ">
                            Completed Orders
                        </th>
                        <th className="px-6 py-5 text-left text-gray-600 font-medium text-sm ">
                            Total Check-outs
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {[...filteredData].reverse().map((fHistory,index)=>(
                    <tr key={fHistory.fid} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-3 text-gray-600 text-sm">
                            {index + 1}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-sm">
                            {fHistory.date}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-sm">
                            Rs {fHistory.totalRevenue}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-sm">
                            {fHistory.completedOrders}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-sm">
                            {fHistory.totalCheckouts}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>)}
            </div>
            {showFilter && 
            <Filter 
                data={financialHistory} 
                onApply={setFilteredData} 
                onReset={()=>setShowFilter(false)} 
                dateField="date"
            />}
        </div>
    )
}

export default FinancialHistory