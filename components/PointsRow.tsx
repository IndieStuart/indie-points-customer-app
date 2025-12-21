import React from 'react';
import { StyleSheet, View } from 'react-native';


interface PointsRowProps {
  children: React.ReactNode;
  gap?: number;
}

export default function PointsRow({ children, gap = 12 }: PointsRowProps) {
  const items = React.Children.toArray(children);

  return (
    <View style={styles.row}>
      {items.map((child, idx) => (
        <View
          key={idx}
          style={[styles.child, idx < items.length - 1 && { marginRight: gap }]}
        >
          {child}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  child: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
});
