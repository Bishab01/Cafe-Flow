import { useState } from 'react'
import {  QrCode, Banknote, TrendingUp, Receipt, DollarSign} from 'lucide-react'
import MetricCard from '../../layouts/metric'
import TablePayment from './tablepaymentrec'
import RoomPayment from './roompaymentrec'

function Finance() {
  
    const [view, setView]=useState("tablePayment");

    const tablePayments = [
        { id: 1, tableNo: 1, customer: "John Doe", finalPayment: 945, paymentType: "QR", date: "2026-04-25" },
        { id: 2, tableNo: 2, customer: "Jane Smith", finalPayment: 1400, paymentType: "Cash", date: "2026-04-26" },
        { id: 3, tableNo: 3, customer: "Alex Ray", finalPayment: 1800, paymentType: "Cash", date: "2026-04-27" },
    ];

    const roomPayments = [
        { id: 1, roomNo: 101, guest: "Michael Lee", finalPayment: 2800, paymentType: "QR", date: "2026-04-25" },
        { id: 2, roomNo: 102, guest: "Sara Khan", finalPayment: 2400, paymentType: "Cash", date: "2026-04-26" },
        { id: 3, roomNo: 103, guest: "David Kim", finalPayment: 3500, paymentType: "QR", date: "2026-04-27" },
    ];

    const allPayments = [...tablePayments, ...roomPayments];

    // Total revenue
    const totalRevenue = allPayments.reduce(
        (sum, item) => sum + item.finalPayment,
        0
    );

    //Cash payments
    const cashCount = allPayments.filter(
        (item) => item.paymentType === "Cash"
    ).length;

    // QR payments
    const qrCount = allPayments.filter(
        (item) => item.paymentType === "QR"
    ).length;    

  return (
    <div className="flex-1 min-h-screen p-8 bg-gray-50">

        {/* Header */}
        <div className="mb-6">
            <h1 className="text-xl md:text-2xl font-bold">
                Finance View
            </h1>
            <p className="text-sm md:text-[15px] text-gray-400 font-medium mt-1">
                Records all completed and paid orders
            </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <MetricCard
            title="Total Revenue"
            value={`Rs ${totalRevenue}`}
            icon={TrendingUp}
            msg="Table and Room payment records combined "
            color="blue"
        />

        <MetricCard
            title="Cash Payments"
            value={cashCount}
            icon={Banknote}
            msg={`${((cashCount / allPayments.length) * 100).toFixed(0)}% of total`}
            color="green"
        />

        <MetricCard
            title="QR Payments"
            value={qrCount}
            icon={QrCode}
            msg={`${((qrCount / allPayments.length) * 100).toFixed(0)}% of total`}
            color="purple"
        />
        </div>

        {/* View Selection */}
        <div className='flex items-center gap-4 mb-6'>
            <button
              onClick={() => setView("tablePayment")}
              className={`px-8 py-3 rounded-2xl shadow-sm border border-slate-200 text-lg font-medium
              ${view === "tablePayment" ? "bg-blue-100 border-blue-200" : "bg-white hover:bg-gray-200"}`}
            >
              Table Finance
            </button>
            <button 
              onClick={()=>setView("roomPayment")}
              className={`px-8 py-3 rounded-2xl shadow-sm border border-slate-200 text-lg font-medium
              ${view === "roomPayment" ? "bg-blue-100 border-blue-200" : "bg-white hover:bg-gray-200"}`}
            >
                Room Finance
            </button>
        </div>

        {/* Table Payment Records */}
        {view==="tablePayment" && (
            <TablePayment
                tablePayments={tablePayments}
            />
        )}

        {/* Room Payment Records */}
        {view==="roomPayment" && (
            <RoomPayment
                roomPayments={roomPayments}
            />
        )}
    </div>
  );
}

export default Finance