import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navsConfig} from './navsConfig';
import {} from '/#/navigation';
type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};
const Stack = createNativeStackNavigator();

export default function StackNavs() {
  return (
    <Stack.Navigator>
      {navsConfig.map(function (v) {
        return (
          <Stack.Screen
            key={v.key}
            name={v.name}
            component={v.component}
            options={{headerShown: !v.hideNav}}
          />
        );
      })}
    </Stack.Navigator>
  );
}
