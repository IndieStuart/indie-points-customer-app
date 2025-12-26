export interface CustomerProfile {
  email: string;
  points: {
    totalActive: number;
    totalEarned: number;
    totalRedeemed: number;
  };
}

export interface CustomerProfileResponse {
  data: CustomerProfile;
  success: boolean;
  timestamp: string;
}
