import mongoose, { Schema, Document } from "mongoose";

export interface ILeaveRecord extends Document {
  employeeId: string;
  month: string; // YYYY-MM format
  year: number;
  // Paid Leave (PL)
  plTotalLeaveInAccount?: number; // Total Leave In The Account
  plLeaveAvailed?: number;         // Leave Availed (from TOTAL LEAVE TAKEN)
  plSubsistingLeave?: number;      // Subsisting Leave (from LEAVE BALANCE)
  // Casual Leave (CL)
  clTotalLeaveInAccount?: number; // Total Leave In The Account
  clLeaveAvailed?: number;         // Leave Availed (from TOTAL LEAVE TAKEN)
  clSubsistingLeave?: number;      // Subsisting Leave (from LEAVE BALANCE)
  // Sick Leave (SL)
  slTotalLeaveInAccount?: number; // Total Leave In The Account
  slLeaveAvailed?: number;         // Leave Availed (from TOTAL LEAVE TAKEN)
  slSubsistingLeave?: number;      // Subsisting Leave (from LEAVE BALANCE)
  createdAt: Date;
  updatedAt: Date;
}

const leaveRecordSchema = new Schema<ILeaveRecord>(
  {
    employeeId: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    // Paid Leave (PL)
    plTotalLeaveInAccount: Number,
    plLeaveAvailed: Number,
    plSubsistingLeave: Number,
    // Casual Leave (CL)
    clTotalLeaveInAccount: Number,
    clLeaveAvailed: Number,
    clSubsistingLeave: Number,
    // Sick Leave (SL)
    slTotalLeaveInAccount: Number,
    slLeaveAvailed: Number,
    slSubsistingLeave: Number,
  },
  { timestamps: true }
);

// Create compound index for employeeId and month
leaveRecordSchema.index({ employeeId: 1, month: 1 }, { unique: true });

export const LeaveRecord =
  mongoose.models.LeaveRecord ||
  mongoose.model<ILeaveRecord>("LeaveRecord", leaveRecordSchema);
