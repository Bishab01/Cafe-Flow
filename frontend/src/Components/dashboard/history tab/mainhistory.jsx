import FinancialHistory from './financialhistory';
import MenuHistory from './menuhistory';
import { useState } from 'react';

function History(){

    const [ view, setView ] = useState("financialHistory");

    const [financialHistory, setFinancialHistory] = useState([
    {fid: 1, date: "2026-04-28", totalRevenue: 1200, completedOrders: 13, totalCheckouts: 18},
    {fid: 2, date: "2026-04-29", totalRevenue: 1850, completedOrders: 20, totalCheckouts: 25},
    {fid: 3, date: "2026-04-30", totalRevenue: 1420, completedOrders: 16, totalCheckouts: 19}
    ]);

    const [menuCategoryHistory, setMenuCategoryHistory] = useState([
    {mid: 1, date: "2026-04-28", hotBeverages: 146, drinks: 100, food: 211, desserts: 160},
    {mid: 2, date: "2026-04-29", hotBeverages: 160, drinks: 120, food: 190, desserts: 175},
    {mid: 3, date: "2026-04-30", hotBeverages: 155, drinks: 110, food: 225, desserts: 180}
    ]);

  return(
    <div className="flex-1 bg-gray-50 p-8 min-h-screen">
      
        {/* Header */}
        <div className="mb-6 w-100 lg:w-full">
          <h1 className="text-xl md:text-2xl font-bold">
            Performance History
          </h1>
          <p className="text-sm md:text-[15px] text-gray-400 font-medium mt-1">
            Past performance data: financial & operational metrics, and menu category popularity
          </p>
        </div>

        {/* View Selection */}
        <div className='flex items-center gap-4 mb-6'>
            <button
              onClick={() => setView("financialHistory")}
              className={`px-8 py-3 rounded-2xl shadow-sm border border-slate-200 text-lg font-medium
              ${view === "financialHistory" ? "bg-blue-100 border-blue-200" : "bg-white hover:bg-gray-200"}`}
            >
              Financial History
            </button>
            <button 
              onClick={()=>setView("menuHistory")}
              className={`px-8 py-3 rounded-2xl shadow-sm border border-slate-200 text-lg font-medium
              ${view === "menuHistory" ? "bg-blue-100 border-blue-200" : "bg-white hover:bg-gray-200"}`}
            >
                Menu Popularity History
            </button>
        </div>

        {/* financial & operations history */}
        {view==="financialHistory" && (
        <FinancialHistory
          financialHistory={financialHistory}
        />
        )}

        {/* menu category popularity */}
        {view==="menuHistory" && (
        <MenuHistory
          menuCategoryHistory={menuCategoryHistory}
        />
        )}

    </div>
)
}

export default History