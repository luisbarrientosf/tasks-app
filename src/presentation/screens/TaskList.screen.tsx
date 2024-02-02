import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../navigation/StackNavigator";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import { getTasks, getTasksInit } from "../../infrastructure/redux/actions/getTasks.actions";
import { TaskList } from "../components/TaskList/TaskList";


interface Props extends NativeStackScreenProps<StackParams, "TaskList"> {}

export const TaskListScreen: React.FC<Props> = ({ navigation }) => {
  const loading = useAppSelector(state => state.getTasks.loading);
  const tasks = useAppSelector(state => state.getTasks.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(tasks === null && loading === false) {
      dispatch(getTasks());
    }
    return () => {
      dispatch(getTasksInit());
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      { loading || !tasks && <Text>Loading...</Text>}
      { tasks && (
        <TaskList data={tasks} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 12
  },
  title: {
    fontWeight: "600",
    fontSize: 42,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "center"
  },
});