import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface FlexProps {
  children: React.ReactNode;
  columns?: number;
  direction?: 'row' | 'column';
  gap?: number;
  style?: StyleProp<ViewStyle>;
}

export default function Flex({ 
  children,
  columns,
  direction = 'column',
  gap = 12,
  style,
}: FlexProps) {
  const isRowWithColumns = direction === 'row' && columns;
  const items = React.Children.toArray(children);

  if (isRowWithColumns) {
    // Multi-column row layout (replaces Columns)
    return (
      <View style={[styles.row, style]}
      >
        {items.map((child, idx) => (
          <View key={`flex-col-${idx}`} style={[styles.column, idx < items.length - 1 && { marginRight: gap }]}> 
            {child}
          </View>
        ))}
      </View>
    );
  }

  if (direction === 'row') {
    // Simple row with gap spacing (replaces PointsRow)
    return (
      <View style={[styles.row, style]}>
        {items.map((child, idx) => (
          <View key={`flex-row-${idx}`} style={[styles.rowChild, idx < items.length - 1 && { marginRight: gap }]}> 
            {child}
          </View>
        ))}
      </View>
    );
  }

  // Column layout with gap spacing
  return (
    <View style={[styles.column, style]}>
      {items.map((child, idx) => (
        <View key={`flex-col-${idx}`} style={idx < items.length - 1 ? { marginBottom: gap } : undefined}>
          {child}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  rowChild: {
    flex: 1,
  },
});
