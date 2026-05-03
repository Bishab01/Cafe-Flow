import { ClipboardClock, SlidersHorizontal, Minus} from 'lucide-react'

function MenuHistory({menuCategoryHistory}){
    return(
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
            <div className='flex justify-between p-6 border-b border-gray-100 '>
                <div className="flex items-center gap-2">
                    <ClipboardClock className="w-4.5 h-4.5 md:w-5 md:h-5 text-red-500" />
                    <h3  className="font-bold text-[17px] md:text-[19px] ">
                    Menu Category Popularity
                    </h3>
                </div>

                <button className='flex items-center gap-1 text-gray-600 hover:text-black'>
                    Filter
                    <SlidersHorizontal className='w-5 h-5'/>
                </button>
            </div>

            <div className="w-full overflow-x-auto">
                {menuCategoryHistory.length===0?(
                    <div className='text-gray-500 font-medium text-center text-lg p-4 mb-3'>
                        No history to display
                    </div>):
                (<table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-3 text-left text-gray-600 font-medium text-[14.5px]">
                            #
                        </th>
                        <th className="px-6 py-3 text-left text-gray-600 font-medium text-[14.5px]">
                            Date
                        </th>
                        <th className="px-6 py-3 text-left text-gray-600 font-medium text-[14.5px]">
                            Hot Beverage orders
                        </th>
                         <th className="px-6 py-3 text-left text-gray-600 font-medium text-[14.5px]">
                            Drinks orders
                        </th>
                        <th className="px-6 py-3 text-left text-gray-600 font-medium text-[14.5px] ">
                            Food orders
                        </th>
                        <th className="px-6 py-3 text-left text-gray-600 font-medium text-[14.5px] ">
                            Dessert orders
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {[...menuCategoryHistory].reverse().map((mHistory,index)=>(
                    <tr key={mHistory.mid} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-3 text-gray-600 text-[14.5px]">
                            {index + 1}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-[14.5px]">
                            {mHistory.date}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-[14.5px]">
                            {mHistory.hotBeverages}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-[14.5px]">
                            {mHistory.drinks}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-[14.5px]">
                            {mHistory.food}
                        </td>

                        <td className="px-6 py-3 text-gray-600 text-[14.5px]">
                            {mHistory.desserts}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>)}
            </div>
        </div>
    )
}

export default MenuHistory