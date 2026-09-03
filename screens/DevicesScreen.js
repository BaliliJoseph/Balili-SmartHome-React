import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Pressable } from 'react-native';

const DEVICES = [
  { id: '1', name: 'Light', room: 'Living Room', status: 'ON' },
  { id: '2', name: 'Air Conditioner', room: 'Living Room', status: '27°C' },
];

export default function DevicesScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>My Devices</Text>
        <FlatList
          data={DEVICES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={({ pressed }) => [ styles.card, pressed && styles.cardPressed, ]} >
              <View>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>{item.room}</Text>
              </View>
              <Text style={styles.cardStatus}>{item.status}</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f1f1f1' },
  container: { flex: 1, padding: 20, paddingTop: 30 },
  title: { fontSize: 32, fontWeight: '900', marginBottom: 24 },

  
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 22, fontWeight: '800', marginBottom: 4 },
  cardSubtitle: { fontSize: 16, fontWeight: '500', color: '#333' },
  cardStatus: { fontSize: 18, fontWeight: '800' },

  cardPressed: {
  transform: [{ scale: 0.96 }],
  opacity: 0.8,
  },
  
});