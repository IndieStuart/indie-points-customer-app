import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';
import { ColorBar } from './ColorBar';
import Flex from './Flex';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ 
  title, 
  subtitle
}: PageHeaderProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Flex direction="row" columns={3} gap={8}>
        <ColorBar variant="blue" />
        <ColorBar variant="yellow" />
        <ColorBar variant="red" />
      </Flex>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...TYPOGRAPHY.h1,
    color: COLORS.black,
    marginTop: SPACING.xxl,
    textAlign: 'center',
  },
  subtitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.gray,
    margin: SPACING.lg,
    textAlign: 'center',
  },
});
