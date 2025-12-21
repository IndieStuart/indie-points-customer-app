import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ColumnsProps {
  columns: number;
  gap?: number;
  children: React.ReactNode;
}

export default function Columns({ columns, gap = 12, children }: ColumnsProps) {
  return (
    <View style={[styles.row, { gap }]}> 
      {React.Children.map(children, (child) => (
        <View style={styles.column}>
          {child}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
});
