import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

interface InfoCardProps {
  icon: string;
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
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      {children && <View style={styles.children}>{children}</View>}
    </View>
  );
}


const styles = StyleSheet.create({
  children: {
    marginTop: 12,
  },
  container: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
  },
  content: {
    flex: 1,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    width: 48,
  },
  iconText: {
    fontSize: 20,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
