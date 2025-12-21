import React from 'react';
import CardWithIcon from './CardWithIcon';

interface InfoCardProps {
  icon: React.ComponentProps<typeof CardWithIcon>['icon'];
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function InfoCard({ 
  icon, 
  title, 
  subtitle, 
  children
}: InfoCardProps) {
  return (
    <CardWithIcon
      icon={icon}
      title={title}
      subtitle={subtitle}
      variant="bordered"
    >
      {children}
    </CardWithIcon>
  );
}
