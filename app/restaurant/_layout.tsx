import CustomHeader from '@/src/components/CustomHeader';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitleProvider, useHeaderTitle } from '../../src/components/HeaderTitleContext';

export default function Layout() {
  return (
    <HeaderTitleProvider>
      <Stack screenOptions={{ header: () => <HeaderSlot /> }} />
    </HeaderTitleProvider>
  );
}

function HeaderSlot() {
  const { title } = useHeaderTitle();
  const router = useRouter();

  return (
    <SafeAreaView 
      style={
        {backgroundColor: "#FFFF"}
      }>
      <CustomHeader title={title} onBack={() => router.back()} />
    </SafeAreaView>
  );
}