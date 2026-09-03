import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Temperature Unit</Text>
          <Text style={styles.rowValue}>°C</Text>
        </View>
        <View style={styles.divider} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f1f1f1' },
  container: { flex: 1, padding: 20, paddingTop: 30 },
  title: { fontSize: 32, fontWeight: '900', marginBottom: 40 },

 
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  rowLabel: { fontSize: 20, fontWeight: '700' },
  rowValue: { fontSize: 20, fontWeight: '700' },
  divider: { height: 2, backgroundColor: '#000' },
});