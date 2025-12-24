import React, { createContext, useContext, useState, ReactNode } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export type TourStep = {
  id: number;
  screen: string;
  title: string;
  description: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  highlightArea?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

const TOUR_STEPS: TourStep[] = [
  {
    id: 1,
    screen: 'Home',
    title: 'Welcome to Indie Points!',
    description:
      'This is your home screen where you can see your points summary and history.',
    icon: 'home',
  },
  {
    id: 2,
    screen: 'Points',
    title: 'Your Points',
    description:
      'This is your individual Indie Points loyalty card, which you can show to businesses to earn and redeem points.',
    icon: 'gift',
  },
  {
    id: 3,
    screen: 'Scan',
    title: 'Scan QR Codes',
    description:
      'This page allows you to scan business QR codes to earn bonus points.',
    icon: 'camera',
  },
  {
    id: 4,
    screen: 'History',
    title: 'Transaction History',
    description:
      'See all your past transactions, including points earned and rewards redeemed.',
    icon: 'file-text-o',
  },
  {
    id: 5,
    screen: 'Settings',
    title: 'Settings & Account',
    description: 'Manage your account, and customise your preferences.',
    icon: 'cog',
  },
];

type TourContextType = {
  isActive: boolean;
  currentStep: number;
  totalSteps: number;
  currentTourStep: TourStep | null;
  startTour: () => void;
  nextStep: () => void;
  previousStep: () => void;
  skipTour: () => void;
};

const TourContext = createContext<TourContextType | undefined>(undefined);

export function TourProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const currentTourStep =
    isActive && currentStep < TOUR_STEPS.length
      ? TOUR_STEPS[currentStep]
      : null;

  const startTour = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      skipTour();
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipTour = () => {
    setIsActive(false);
    setCurrentStep(0);
  };

  return (
    <TourContext.Provider
      value={{
        isActive,
        currentStep,
        totalSteps: TOUR_STEPS.length,
        currentTourStep,
        startTour,
        nextStep,
        previousStep,
        skipTour,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export function useTour() {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
}
