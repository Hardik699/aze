import React from "react";
import { cn, convertNumberToWords } from "@/lib/utils";

interface SalarySlipProps {
  employee: any;
  record: any;
  className?: string;
}

export const SalarySlip: React.FC<SalarySlipProps> = ({ employee, record, className }) => {
  const formatCurrency = (val?: number) => {
    return (val || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const earningRows = [
    { label: "Basic", actual: record.basic, earned: record.basicEarned },
    { label: "HRA", actual: record.hra, earned: record.hraEarned },
    { label: "Conveyance", actual: record.conveyance, earned: record.conveyanceEarned },
    { label: "Sp. Allowance", actual: record.specialAllowance, earned: record.specialAllowanceEarned },
    { label: "Bonus", actual: record.bonus, earned: record.bonusEarned },
    { label: "Incentive", actual: record.incentive, earned: record.incentiveEarned },
    { label: "Adjustment", actual: record.adjustment, earned: record.adjustmentEarned },
    { label: "Retention Bonus", actual: record.retentionBonus, earned: record.retentionBonusEarned },
    { label: "Advance Any", actual: record.advanceAny, earned: record.advanceAnyEarned },
  ];

  const deductionRows = [
    { label: "PF", amount: record.pf },
    { label: "ESIC", amount: record.esic },
    { label: "PT", amount: record.pt },
    { label: "TDS", amount: record.tds },
    { label: "Retention", amount: record.retention },
    { label: "", amount: null },
    { label: "", amount: null },
    { label: "", amount: null },
    { label: "", amount: null },
  ];

  const netSalary = record.netSalary || record.totalSalary || 0;

  return (
    <div className={cn("bg-white text-black p-4 font-sans text-xs", className)}>
      <table className="w-full border-collapse border border-slate-300">
        <thead className="bg-[#4a86e8] text-white">
          <tr>
            <th className="border border-slate-300 px-2 py-1 uppercase font-bold text-center w-1/5">EARNING</th>
            <th className="border border-slate-300 px-2 py-1 uppercase font-bold text-center w-1/5">ACTUAL</th>
            <th className="border border-slate-300 px-2 py-1 uppercase font-bold text-center w-1/5">EARNED</th>
            <th className="border border-slate-300 px-2 py-1 uppercase font-bold text-center w-1/5">DEDUCTION</th>
            <th className="border border-slate-300 px-2 py-1 uppercase font-bold text-center w-1/5">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {earningRows.map((row, idx) => (
            <tr key={idx}>
              <td className="border border-slate-300 px-4 py-1 font-bold">{row.label}</td>
              <td className="border border-slate-300 px-4 py-1 text-center">{row.actual !== undefined ? formatCurrency(row.actual) : "0.00"}</td>
              <td className="border border-slate-300 px-4 py-1 text-center">{row.earned !== undefined ? formatCurrency(row.earned) : "0.00"}</td>
              <td className="border border-slate-300 px-4 py-1 font-bold">{deductionRows[idx]?.label}</td>
              <td className="border border-slate-300 px-4 py-1 text-center">{deductionRows[idx]?.amount !== null ? formatCurrency(deductionRows[idx].amount) : "0.00"}</td>
            </tr>
          ))}
          <tr className="bg-[#d9e9ff] font-bold">
            <td className="border border-slate-300 px-4 py-1 uppercase">Gross Earnings</td>
            <td className="border border-slate-300 px-4 py-1 text-center">{formatCurrency(record.actualGross)}</td>
            <td className="border border-slate-300 px-4 py-1 text-center">{formatCurrency(record.earnedGross)}</td>
            <td className="border border-slate-300 px-4 py-1 uppercase">Total Deduction</td>
            <td className="border border-slate-300 px-4 py-1 text-center">{formatCurrency(record.deductions)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="bg-[#1c4587] text-white font-bold text-sm">
            <td colSpan={3} className="border border-slate-300 px-4 py-2 text-center uppercase">Net Salary Credited</td>
            <td colSpan={2} className="border border-slate-300 px-4 py-2 text-center">₹ {formatCurrency(netSalary)}</td>
          </tr>
          <tr>
            <td colSpan={3} className="border border-slate-300 px-4 py-4 text-center font-bold">Amount (in words)</td>
            <td colSpan={2} className="border border-slate-300 px-4 py-4 text-center text-[#38761d] italic font-semibold">
              {convertNumberToWords(netSalary)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
