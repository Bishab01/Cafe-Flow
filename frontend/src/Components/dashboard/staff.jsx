import { SquarePen, Trash2, UserCog } from 'lucide-react';
import { useState } from 'react';
function Staff(){

  const [salary,setSalary]=useState(0);
  const [editSalary,setEditSalary]=useState(false);
  const [msg,setMsg]=useState("");

  const validateSalary = () => {
    if(!salary || salary<=0)
    {
      setMsg("Enter valid salary");
      return;
    }
    setEditSalary(false);
    setMsg("");
  }

return(
  <div className="flex-1 bg-gray-50 p-8 min-h-screen">
      
    {/* Header */}
    <div className="mb-6">
      <h1 className="text-xl md:text-2xl font-bold">
        Staff Management
      </h1>
      <p className="text-sm md:text-[15px] text-gray-400 font-medium mt-1">
        View and Manage all staffs
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-4 rounded-lg shadow-sm font-medium">
        <p className="text-gray-600 text-[17px] mb-2 ">Total Staff</p>
        <p className="text-gray-900 text-[17px]">1</p>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm font-medium">
        <p className="text-blue-700 text-[17px] mb-2">Roles Filled</p>
        <p className="text-blue-900 text-[17px]">1/x</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg shadow-sm font-medium">
        <p className="text-orange-700 text-[17px] mb-2">Monthly Payroll</p>
        <p className="text-orange-900 text-[17px]">Rs 12500</p>
      </div>
    </div>

    {/* Staff Table */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center gap-2">
        <UserCog className="w-4.5 h-4.5 md:w-5 md:h-5 text-red-500" />
        <h3  className="font-bold text-[17px] md:text-[19px]">
          Team Members
        </h3>
      </div>

      {/*  {staff.length === 0 ? (
          <div className="py-16 text-center">
            <UserCog className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No staff members yet.</p>
            <p className="text-gray-400 text-sm mt-1">Use the Sign Up button on the login page to add employees.</p>
          </div>
        ) : ( */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm md:text-lg">
                #
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm md:text-lg">
                Name
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm md:text-lg">
                Job title
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm md:text-lg ">
                Salary
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium text-sm md:text-lg">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-6 py-3 text-gray-600 text-sm md:text-lg">1</td>

              <td className="px-6 py-3 text-gray-600 text-sm md:text-lg">
                Name 
              </td>

              <td className="px-6 py-3 text-gray-600 text-sm md:text-lg">
                Manager
              </td>

              <td className="px-6 py-3 flex justify-between items-center text-gray-600 text-sm md:text-lg"> 
                <p>Rs {Number(salary).toLocaleString()}</p>
                <SquarePen 
                onClick={()=>setEditSalary(true)}
                className='w-4 h-4 text-red-400 hover:text-red-500'/>
              </td>

              <td className="px-6 py-3">
                <button className="text-red-400 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {editSalary && (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className='bg-white rounded-lg px-4 py-6 w-80 '>
          <p className='font-bold text-lg mb-6'>Assign Salary</p>
          <p className='font-medium mb-3'>New Salary:</p>
          <input 
            type="number"
            value={salary}
            className='w-full border rounded-lg p-2 mb-3'
            onChange={(e)=>setSalary(e.target.value)}
          />

          <p className='text-red-500 font-medium text-sm mb-4'>{msg}</p>

          <div className='flex items-center justify-between'>
            <button 
            onClick={()=>setEditSalary(false)}
            className="bg-red-400 rounded-xl text-white px-4 py-1.5 font-medium">
              Cancel
            </button>
            <button 
            onClick={validateSalary}
            className="bg-green-400 rounded-xl text-white px-4 py-1.5 font-medium">
              Confirm
            </button>
          </div>
        </div>
      </div>
    )}

  </div>
)}
  
export default Staff