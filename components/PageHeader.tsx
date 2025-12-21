import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import { ColorBar } from './';
import Columns from './Columns';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ 
  title, 
  subtitle
}: PageHeaderProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Columns columns={3} gap={8}>
        <ColorBar color="blue" />
        <ColorBar color="yellow" />
        <ColorBar color="red" />
      </Columns>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 20,
    margin: 12,
    textAlign: 'center',
  },
});
