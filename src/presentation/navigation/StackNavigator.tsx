import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TaskListScreen } from "../screens/TaskList.screen";
import { TaskEditScreen } from "../screens/TaskEdit.screen";
import { TaskCreateScreen } from "../screens/TaskCreate.screen";
import { Task } from "../../domain/entities/Task";


export type StackParams = {
  TaskList: undefined;
  TaskEdit: { task: Task };
  TaskCreate: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TaskList" component={TaskListScreen}/>
      <Stack.Screen name="TaskEdit" component={TaskEditScreen}/>
      <Stack.Screen name="TaskCreate" component={TaskCreateScreen}/>
    </Stack.Navigator>
  );
};
