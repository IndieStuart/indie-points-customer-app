export interface Transaction {
  id: string;
  businessId: string;
  businessName: string;
  amount: number;
  points: number;
  date: string;
  type: 'earn' | 'redeem';
}
