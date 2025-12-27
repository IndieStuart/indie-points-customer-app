export interface Transaction {
  id: string;
  businessId: string;
  businessName: string;
  amountSpent: number;
  pointsAwarded: number;
  date: string;
  type: 'earn' | 'redeem';
}
