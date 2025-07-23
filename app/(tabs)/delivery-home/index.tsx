import { hp, wp } from '@/src/utils/resposive';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomCard from '../../../src/components/CustomRestaurantCard';
import SearchBar from '../../../src/components/SearchBar';
import currentFoodRooms from '../../../src/mocks/restaurant/CurrentRooms.json';

export default function DeliveryHome() {
  const { t } = useTranslation('delivery');
  
  const router = useRouter();

  const [query, setQuery] = useState('');

  const roomList = currentFoodRooms.currentFoodRooms;

  //useMemo: 반복되면 비효율적인 연산을 “메모이제이션” 
  //query, roomList가 변경될 경우에만 filtered 값 재계산 = 검색어가 바뀔 떄 혹은 룸 리스트가 바뀔 때 만 재연산
  //검색 창에 글을 하나하나 적을 때 마다 필터링 해서 검색 버튼을 누르지 않아도 즉시 동작 하도록👍
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
        <Text style={styles.bigTitle}>{t('bigTitle')}</Text>
        <Text style={styles.smallTitle}>{t('smallTitle')}</Text>
      </View>
      <SearchBar
        value={query} //검색바 컴포넌트에 value 로 query(검색창에 입력된 값)넘기기, 검색창에 값 표시 하는 역할만
        onChangeText={setQuery} 
        placeholder="가게 이름을 검색하세요"
      />
      <View style={styles.listContainer}>
      <FlatList
        data={filtered}
        initialNumToRender={6} // 초기 랜더링 할 아이템 개수 설정, 랜더링 최적화
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CustomCard
            room={item}
            onPress={() => {
              { router.push('') }
            }}
          />
        )}
        contentContainerStyle={{ padding: wp(4) }}
        ListEmptyComponent={
          <Text style={{ color: '#aaa', padding: 20, textAlign: 'center' }}>
            검색 결과가 없습니다.
          </Text> 
        } //컨텐츠가 없을 때 텍스트 반환
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
