import type { Transaction, Reward } from '../types';

export const FAKE_BUSINESS_TRANSACTIONS: Record<string, Transaction[]> = {
  '1': [
    {
      id: 't1',
      businessId: '1',
      businessName: 'Coffee Corner',
      amountSpent: 4.5,
      pointsAwarded: 5,
      date: '2025-12-20',
      type: 'earn',
    },
    {
      id: 't2',
      businessId: '1',
      businessName: 'Coffee Corner',
      amountSpent: 10.0,
      pointsAwarded: 10,
      date: '2025-12-15',
      type: 'redeem',
    },
  ],
  '2': [
    {
      id: 't3',
      businessId: '2',
      businessName: 'The Book Nook',
      amountSpent: 25.99,
      pointsAwarded: 26,
      date: '2025-12-18',
      type: 'earn',
    },
  ],
  '3': [
    {
      id: 't4',
      businessId: '3',
      businessName: 'Green Grocer',
      amountSpent: 15.25,
      pointsAwarded: 15,
      date: '2025-12-22',
      type: 'earn',
    },
  ],
};

export const FAKE_REWARDS: Record<string, Reward[]> = {
  '1': [
    {
      id: 'r1',
      name: 'Free Coffee',
      description: 'Get a free regular coffee',
      pointsRequired: 10,
      available: true,
    },
    {
      id: 'r2',
      name: 'Free Pastry',
      description: 'Get a free pastry of your choice',
      pointsRequired: 15,
      available: true,
    },
  ],
  '2': [
    {
      id: 'r3',
      name: '10% Off',
      description: '10% off your next purchase',
      pointsRequired: 20,
      available: true,
    },
  ],
  '3': [
    {
      id: 'r4',
      name: 'Free Produce',
      description: 'Get £5 worth of free produce',
      pointsRequired: 50,
      available: false,
    },
  ],
};
