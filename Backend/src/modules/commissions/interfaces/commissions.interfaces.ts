export interface Commissions {
  commissionId: number;
  subjectId: number;
  teacherId: string;
  studentId: string;
  state: CommissionState;
}

export type CommissionState = "coursing" | "approved" | "disapproved";
