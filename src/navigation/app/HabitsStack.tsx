import HabitsList from '@/features/habits/HabitsList';
import { HabitsStackParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<HabitsStackParamList>();

export default function HabitsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HabitsList" component={HabitsList} />
    </Stack.Navigator>
  );
}
