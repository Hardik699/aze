import mongoose, { Schema, Document } from "mongoose";

export interface ILeaveRecord extends Document {
  employeeId: string;
  month: string; // YYYY-MM format
  year: number;
  // Paid Leave (PL)
  plTotalLeaveTaken?: number;
  plLeaveBalance?: number;
  plTotalLeaveInAccount?: number;
  // Casual Leave (CL)
  clTotalLeaveTaken?: number;
  clLeaveBalance?: number;
  clTotalLeaveInAccount?: number;
  // Sick Leave (SL)
  slTotalLeaveTaken?: number;
  slLeaveBalance?: number;
  slTotalLeaveInAccount?: number;
  createdAt: Date;
  updatedAt: Date;
}

const leaveRecordSchema = new Schema<ILeaveRecord>(
  {
    employeeId: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    // Paid Leave (PL)
    plTotalLeaveTaken: Number,
    plLeaveBalance: Number,
    plTotalLeaveInAccount: Number,
    // Casual Leave (CL)
    clTotalLeaveTaken: Number,
    clLeaveBalance: Number,
    clTotalLeaveInAccount: Number,
    // Sick Leave (SL)
    slTotalLeaveTaken: Number,
    slLeaveBalance: Number,
    slTotalLeaveInAccount: Number,
  },
  { timestamps: true }
);

// Create compound index for employeeId and month
leaveRecordSchema.index({ employeeId: 1, month: 1 }, { unique: true });

export const LeaveRecord =
  mongoose.models.LeaveRecord ||
  mongoose.model<ILeaveRecord>("LeaveRecord", leaveRecordSchema);
