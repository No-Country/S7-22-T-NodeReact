export interface Commissions {
  commissionId: number;
  studentId: string;
  state: CommissionState;
}

export type CommissionState = "coursing" | "approved" | "disapproved";
