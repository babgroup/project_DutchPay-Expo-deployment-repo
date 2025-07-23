import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { hp, wp } from '../utils/resposive';

export default function CustomTabBar({ state, descriptors, navigation }:{state: any, descriptors: any, navigation: any}) {

  const currentRouteName = state.routes[state.index].name;
  const showPlusBtn = currentRouteName === 'delivery-home' || currentRouteName === 'taxi-home';
  
  // 수동 랜더링 순서 지정
  const renderOrder = [
    'main/index',
    'delivery-home/index',
    'plus',
    'taxi-home/index',
    'user-home/index'
  ];
  const orderedRoutes = renderOrder
    .map(name => state.routes.find((route) => route.name === name))
    .filter(Boolean);

  return (
    <View style={styles.tabBar}>
      {/* 지정해둔 순서 대로 아이콘 랜더링 */}
      {orderedRoutes.map((route, index) => {

        // if 문으로 방 생성 버튼 별도로 처리 
        if (route.name === 'plus') {
          if (!showPlusBtn) return null
          else if (currentRouteName === 'delivery-home') {
            return (
              <TouchableOpacity
                key="plus"
                activeOpacity={0.9}
                style={styles.plusWrapper}
                onPress={() => navigation.navigate('/restaurant/create-food-room')}
              >
                <View style={styles.plusBtn}>
                  <Ionicons name="add" size={wp(9)} color="#ff8600" />
                </View>
              </TouchableOpacity>
            );
          }
          else if (currentRouteName === 'taxi-home') {
            return (
              <TouchableOpacity
                key="plus"
                activeOpacity={0.9}
                style={styles.plusWrapper}
                onPress={() => navigation.navigate('/taxi/create-taxi-room')}
              >
                <View style={styles.plusBtn}>
                  <Ionicons name="add" size={wp(9)} color="#ff8600" />
                </View>
              </TouchableOpacity>
            );
          }
        }
        
        // 아이콘 - 스크린 경로 매핑
        let iconName = '';
        if (route.name === 'main/index') iconName = 'home-outline';
        else if (route.name === 'delivery-home/index') iconName = 'cart-outline';
        else if (route.name === 'taxi-home/index') iconName = 'car-outline';
        else if (route.name === 'user-home/index') iconName = 'person-outline';

        const isFocused = route.key === state.routes[state.index].key;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <Ionicons
              name={iconName}
              size={wp(7)}
              color={isFocused ? '#ff8600' : '#222'} //선택 된 상태일 때 아이콘 색 주황색으로 변경
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: wp(4),
    right: wp(4),
    bottom: hp(2),
    height: hp(9),
    backgroundColor: '#fff',
    borderRadius: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: hp(4),
    elevation: 8,
    paddingHorizontal: wp(3),
    zIndex: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(7.5),
  },
  plusWrapper: {
    position: 'absolute',
    left: hp(22),
    bottom: hp(5.6),
    transform: [{ translateX: -wp(9) }], 
    zIndex: 10,
  },
  plusBtn: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(9),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#ff8600',
    shadowColor: '#ff8600',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 10,
  },
});
