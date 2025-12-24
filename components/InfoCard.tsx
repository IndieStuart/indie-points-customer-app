import React from 'react';
import CardWithIcon from './CardWithIcon';

interface InfoCardProps {
  children?: React.ReactNode;
  icon: React.ComponentProps<typeof CardWithIcon>['icon'];
  subtitle: string;
  title: string;
}

export default function InfoCard({ 
  children,
  icon,
  subtitle,
  title,
}: InfoCardProps) {
  return (
    <CardWithIcon
      icon={icon}
      variant="primary"
      title={title}
      subtitle={subtitle}
    >
      {children}
    </CardWithIcon>
  );
}
