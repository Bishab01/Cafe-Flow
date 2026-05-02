import { useState } from 'react';
import { 
    Printer, 
    SlidersHorizontal,
    QrCode, 
    Banknote, 
    TrendingUp, 
    Receipt, 
    X, 
    ReceiptText,
    DollarSign
} from 'lucide-react';
import MetricCard from '../layouts/metric';

function Finance() {
  /* const { financeRecords } = useCafe();
  const [selectedRecord, setSelectedRecord] = useState<FinanceRecord | null>(null);
  const [filterPayment, setFilterPayment] = useState<'All' | 'Cash' | 'QR'>('All');

  const totalRevenue = financeRecords.reduce((sum, r) => sum + r.finalAmount, 0);
  const totalOrders = financeRecords.length;
  const avgOrder = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;
  const cashRevenue = financeRecords.filter(r => r.paymentMethod === 'Cash').reduce((s, r) => s + r.finalAmount, 0);
  const qrRevenue = financeRecords.filter(r => r.paymentMethod === 'QR').reduce((s, r) => s + r.finalAmount, 0);

  const filtered = filterPayment === 'All' ? financeRecords : financeRecords.filter(r => r.paymentMethod === filterPayment); */

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
            value="Rs 945"
            icon={TrendingUp}
            color="red"
        />

        <MetricCard
            title="Cash Revenue"
            value="Rs 0"
            icon={Banknote}
            color="green"
        />

        <MetricCard
            title="QR Revenue"
            value="Rs 945"
            icon={QrCode}
            color="purple"
        />
        </div>

        {/* Filter*/}
        {/* <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
                <ReceiptText className="w-5 h-5 text-red-500" />
                <h3>Payment Records</h3>
            </div>
            <div className="flex gap-2">
                {(['All', 'Cash', 'QR'] as const).map((f) => (
                <button
                    key={f}
                    onClick={() => setFilterPayment(f)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filterPayment === f
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    {f === 'QR' ? 'QR / UPI' : f}
                </button>
                ))}
            </div>
            </div>

            {filtered.length === 0 ? (
            <div className="py-16 text-center">
                <Receipt className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No payment records yet.</p>
                <p className="text-gray-400 text-sm mt-1">Completed orders will appear here.</p>
            </div>
            ) : ( */}
            

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                
                <div className="p-6 border-b border-gray-100 flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                        <ReceiptText className="w-4.5 h-4.5 md:w-5 md:h-5 text-red-500" />
                        <h3  className="font-bold text-[17px] md:text-[19px]">
                            Payment Records
                        </h3>
                    </div>

                    <button className='flex items-center gap-1 text-gray-600 hover:text-black'>
                        Filter
                        <SlidersHorizontal className='w-5 h-5'/>
                    </button>
                </div>

                {/* Payment Records */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="w-full max-h-130 overflow-auto">
                        <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm">
                                    #
                                </th>
                                <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm">
                                    Table/Room
                                </th>
                                <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm">
                                    Customer
                                </th>
                                <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm">
                                    Subtotal (Rs)
                                </th>
                                <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm">
                                    Discount (%)
                                </th>
                                <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm">
                                    Final (Rs)
                                </th>
                                <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm">
                                    Payment
                                </th>
                                <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm ">
                                    Date
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="px-6 py-3 text-gray-600 text-sm">
                                    1
                                </td>

                                <td className="px-6 py-3 text-gray-600 text-sm">
                                    Table 1
                                </td>

                                <td className="px-6 py-3 text-gray-600 text-sm">
                                    Name
                                </td>

                                <td className="px-6 py-3 text-gray-600 text-sm">
                                    1050
                                </td>

                                <td className="px-6 py-3 text-gray-600 text-sm">
                                    10
                                </td>

                                <td className="px-6 py-3 text-gray-600 text-sm">
                                    945
                                </td>

                                <td className="px-6 py-3 text-gray-600 text-sm">
                                    QR
                                </td>

                                <td className="px-6 py-3 text-gray-600 text-sm">
                                    2026-04-25
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Finance