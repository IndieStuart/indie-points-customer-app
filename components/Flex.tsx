import React from 'react';
import { StyleSheet, View } from 'react-native';

interface FlexProps {
  direction?: 'row' | 'column';
  columns?: number;
  gap?: number;
  children: React.ReactNode;
}

/**
 * A unified layout component that combines the functionality of Columns and PointsRow.
 * Use `direction="row"` with `columns` prop for multi-column layouts.
 * Use `direction="column"` (or omit) for single column layouts with gap spacing.
 */
export default function Flex({ 
  direction = 'column',
  columns,
  gap = 12, 
  children 
}: FlexProps) {
  const isRowWithColumns = direction === 'row' && columns;
  const items = React.Children.toArray(children);

  if (isRowWithColumns) {
    // Multi-column row layout (replaces Columns)
    return (
      <View style={[styles.row, { gap }]}>
        {items.map((child, idx) => (
          <View key={`flex-col-${idx}`} style={styles.column}>
            {child}
          </View>
        ))}
      </View>
    );
  }

  if (direction === 'row') {
    // Simple row with gap spacing (replaces PointsRow)
    return (
      <View style={styles.row}>
        {items.map((child, idx) => (
          <View
            key={`flex-row-${idx}`}
            style={[styles.rowChild, idx < items.length - 1 && { marginRight: gap }]}
          >
            {child}
          </View>
        ))}
      </View>
    );
  }

  // Column layout with gap spacing
  return (
    <View style={[styles.column, { gap }]}>
      {children}
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
  rowChild: {
    flex: 1,
  },
});
