import CustomCard from '@/src/components/CustomCard';
import SearchBar from '@/src/components/SearchBar';
import currentFoodRooms from '@/src/mocks/restaurant/CurrentRooms.json';
import { hp, wp } from '@/src/utils/resposive';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DeliveryHome() {
  const [query, setQuery] = useState('');

  const roomList = currentFoodRooms.currentFoodRooms;

  const filtered = useMemo(() => {
    if (!query) return roomList;
    const lower = query.toLowerCase();
    return roomList.filter(room =>
      (room.restaurantName).toLowerCase().includes(lower)
    );
  }, [query, roomList]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.bigTitle}>배달 Delivery</Text>
        <Text style={styles.smallTitle}>배달비 부담은 낮추고, 포만감은 2배로!</Text>
      </View>
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="가게 이름을 검색하세요"
      />
      <View style={styles.listContainer}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CustomCard
            room={item}
            onPress={() => {
              { router.push(`/restaurant/create-food-room`) }
            }}
          />
        )}
        contentContainerStyle={{ padding: wp(4) }}
        ListEmptyComponent={
          <Text style={{ color: '#aaa', padding: 20, textAlign: 'center' }}>
            검색 결과가 없습니다.
          </Text>
        }
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bigTitle: {
    fontSize: wp(8),
    fontWeight: '400',
    marginTop: wp(6),
    marginBottom: wp(2),
    marginLeft: wp(8),
  },
  smallTitle: {
    fontSize: wp(4),
    fontWeight: '400',
    marginLeft: wp(8),
    marginBottom: hp(2),
  },
  listContainer: {
    marginBottom: hp(32)
  }
});
