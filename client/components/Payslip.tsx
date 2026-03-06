interface PayslipData {
  // Header Info
  companyName: string;
  companyAddress: string;
  
  // Employee Details
  employeeName: string;
  uanNo: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  employeeCode: string;
  esicNo: string;
  bankAccountNo: string;
  daysInMonth: number;
  
  // Leave Details
  leaves: {
    type: string;
    total: number;
    availed: number;
    subsisting: number;
    lwp: number;
  }[];
  totalLeavesTaken: number;
  totalLeaveWithoutPay: number;
  totalPresentDays: number;
  totalDaysPayable: number;
  
  // Salary Details
  earnings: {
    name: string;
    actualGross: number;
    earnedGross: number;
  }[];
  deductions: {
    name: string;
    amount: number;
  }[];
  grossEarnings: number;
  earnedGrossEarnings: number;
  totalDeduction: number;
  netSalaryCredited: number;
  
  // Additional Info
  month: number;
  year: number;
  amountInWords: string;
}

export function Payslip({ data }: { data: PayslipData }) {
  const monthName = new Date(data.year, data.month - 1).toLocaleString('default', {
    month: 'long',
    year: 'numeric'
  });

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Unified centering style for all table cells
  const cellCenteringStyle = {
    verticalAlign: 'middle' as const,
    textAlign: 'center' as const,
    padding: '10px 8px',
    lineHeight: '1.2',
    fontSize: '18px',
    fontWeight: '500',
  };

  const headerCenteringStyle = {
    ...cellCenteringStyle,
    fontWeight: 'bold' as const,
    backgroundColor: '#f3f4f6', // gray-100 for better header visibility
  };

  return (
    <div className="w-full p-0" style={{fontFamily: '"Segoe UI", Arial, sans-serif', lineHeight: '1.3', fontSize: '15px', backgroundColor: '#ffffff', minHeight: '100vh'}}>
      <div className="w-full p-0" style={{fontFamily: '"Segoe UI", Arial, sans-serif', fontSize: '15px', backgroundColor: '#ffffff', lineHeight: '1.3'}}>
      {/* Header Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div className="p-3" style={{ textAlign: 'center', width: '100%' }}>
          <h1 style={{ fontSize: '28px', margin: '0 0 4px 0' }} className="font-bold text-black">{data.companyName}</h1>
          <p style={{ fontSize: '13px', margin: '0 0 8px 0' }} className="text-gray-700">{data.companyAddress}</p>
          <p style={{ fontSize: '16px', margin: 0 }} className="font-semibold text-black">Pay Check - {monthName}</p>
        </div>
      </div>

      {/* Employee Details Section */}
      <div className="p-3">
        <table className="w-full border-collapse" style={{fontSize: '18px', fontWeight: '500', fontFamily: '"Segoe UI", Arial, sans-serif'}}>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-700 text-black font-bold text-center" style={cellCenteringStyle}>Name:</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.employeeName}</td>
              <td className="border border-gray-700 text-black font-bold text-center" style={cellCenteringStyle}>UAN No.:</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.uanNo}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-700 text-black font-bold text-center" style={cellCenteringStyle}>Department:</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.department}</td>
              <td className="border border-gray-700 text-black font-bold text-center" style={cellCenteringStyle}>ESIC No.:</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.esicNo}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-700 text-black font-bold text-center" style={cellCenteringStyle}>Designation:</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.designation}</td>
              <td className="border border-gray-700 text-black font-bold text-center" style={cellCenteringStyle}>Bank A/C No.:</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.bankAccountNo}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-700 text-black font-bold text-center" style={cellCenteringStyle}>Date Of Joining:</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.dateOfJoining}</td>
              <td className="border border-gray-700 text-black font-bold text-center" style={cellCenteringStyle}>Days In Month:</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.daysInMonth}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-700 text-black font-bold" style={cellCenteringStyle}>Employee Code:</td>
              <td className="border border-gray-700 text-black" style={cellCenteringStyle}>{data.employeeCode}</td>
              <td className="border border-gray-700" colSpan={2} style={cellCenteringStyle}></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Leave Details Table */}
      <div className="p-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5px', marginBottom: '10px' }}>
          <h3 className="font-extrabold text-black" style={{ margin: 0, fontSize: '25px', textAlign: 'center' }}>Leave Details</h3>
        </div>
        <table className="w-full border-collapse" style={{fontSize: '18px', fontWeight: '500', fontFamily: '"Segoe UI", Arial, sans-serif', width: '100%', margin: '0 auto'}}>
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Leave Type</th>
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Total Leave In The Account</th>
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Leave Availed</th>
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Subsisting Leave</th>
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>LWP</th>
            </tr>
          </thead>
          <tbody>
            {data.leaves.map((leave, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{leave.type}</td>
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{leave.total.toFixed(1)}</td>
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{leave.availed.toFixed(1)}</td>
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{leave.subsisting.toFixed(1)}</td>
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{leave.lwp.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-bold bg-gray-50">
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>Total Leaves Taken</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.totalLeavesTaken.toFixed(1)}</td>
              <td colSpan={2} className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>Total Leave Without Pay -</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.totalLeaveWithoutPay.toFixed(1)}</td>
            </tr>
            <tr className="font-bold bg-gray-50">
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>Total Present Days</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.totalPresentDays.toFixed(1)}</td>
              <td colSpan={2} className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>Total Days Payable</td>
              <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.totalDaysPayable.toFixed(1)}</td>
            </tr>
          </tfoot>
        </table>
      </div>


      {/* Salary Details Table - 5 Column Layout */}
      <div className="p-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5px', marginBottom: '10px' }}>
          <h3 className="font-extrabold text-black" style={{ margin: 0, fontSize: '25px', textAlign: 'center' }}>Salary Details</h3>
        </div>
        <table className="w-full border-collapse" style={{fontSize: '18px', fontWeight: '500', width: '100%', margin: '0 auto'}}>
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Earning</th>
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Actual</th>
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Earned</th>
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Deduction</th>
              <th className="border border-gray-700 text-center text-black font-bold" style={headerCenteringStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.earnings.map((earning, idx) => (
              <tr key={`earning-${idx}`} className="hover:bg-gray-50">
                <td className="border border-gray-700 text-black text-left" style={{...cellCenteringStyle, textAlign: 'left'}}>{earning.name}</td>
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{formatCurrency(earning.actualGross || 0)}</td>
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{formatCurrency(earning.earnedGross || 0)}</td>
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>
                  {data.deductions[idx]?.name || ''}
                </td>
                <td className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>
                  {data.deductions[idx]?.amount ? formatCurrency(data.deductions[idx].amount) : formatCurrency(0)}
                </td>
              </tr>
            ))}
            <tr className="font-bold bg-gray-100">
              <td className="border border-gray-700 text-black text-left" style={{...cellCenteringStyle, textAlign: 'left', fontWeight: 'bold'}}>Gross Earnings</td>
              <td className="border border-gray-700 text-black text-center" style={{...cellCenteringStyle, fontWeight: 'bold'}}>{formatCurrency(data.grossEarnings)}</td>
              <td className="border border-gray-700 text-black text-center" style={{...cellCenteringStyle, fontWeight: 'bold'}}>{formatCurrency(data.earnedGrossEarnings)}</td>
              <td className="border border-gray-700 text-black text-left" style={{...cellCenteringStyle, textAlign: 'left', fontWeight: 'bold'}}>Deduction</td>
              <td className="border border-gray-700 text-black text-center" style={{...cellCenteringStyle, fontWeight: 'bold'}}>{formatCurrency(data.totalDeduction)}</td>
            </tr>
            <tr className="font-bold bg-gray-100">
              <td colSpan={3} className="border border-gray-700 text-black text-left" style={{...cellCenteringStyle, textAlign: 'left', fontWeight: 'bold'}}>Net Salary Credited</td>
              <td colSpan={2} className="border border-gray-700 text-black text-center" style={{...cellCenteringStyle, fontWeight: 'bold'}}>₹ {formatCurrency(data.netSalaryCredited)}</td>
            </tr>
            <tr>
              <td colSpan={3} className="border border-gray-700 text-black text-left" style={{...cellCenteringStyle, textAlign: 'left', fontWeight: 'bold'}}>Amount (in words)</td>
              <td colSpan={2} className="border border-gray-700 text-black text-center" style={cellCenteringStyle}>{data.amountInWords}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-2 text-center">
        <img src="https://cdn.builder.io/api/v1/image/assets%2F8012cbea6d4a4d528be55b21ebc4390f%2F5e57f6b47c4249638a8470815ec3ca60?format=webp&width=800&height=1200" alt="Infoseum Logo" className="mx-auto mb-2" style={{height: '60px', width: 'auto'}} />
        <p style={{fontSize: '13px'}} className="text-gray-600">This is a system generated slip</p>
      </div>
      </div>
    </div>
  );
}
