import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cadastroTarefa from './telas/cadastroTarefa';
import listaTarefa from './telas/listaTarefa';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TO-DO List' component={listaTarefa} />
        <Stack.Screen name='Nova tarefa' component={cadastroTarefa} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();