import { Tabs } from 'expo-router';
import CustomTabBar from '../../src/components/CustomTabBar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />} //각 Tabs 에서 기본 탭바 대신 커스텀 탭바 사용하기
      screenOptions={{
        headerShown: false, // 각 화면에서 기본으로 보여주는 헤더 없애기
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="delivery-home" />
      <Tabs.Screen name="plus" />
      <Tabs.Screen name="taxi-home" />
      <Tabs.Screen name="user-page" />
    </Tabs>
  );
}
