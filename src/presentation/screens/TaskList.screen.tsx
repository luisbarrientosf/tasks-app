import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../navigation/StackNavigator";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import { getTasks, getTasksInit } from "../../infrastructure/redux/actions/getTasks.actions";
import { TaskList } from "../components/TaskList/TaskList";
import { Button } from "../../presentation/components/Button/Button";
import { ErrorCard } from "../../presentation/components/ErrorCard/ErrorCard";

interface Props extends NativeStackScreenProps<StackParams, "TaskList"> {}

export const TaskListScreen: React.FC<Props> = ({ navigation }) => {
  const { loading, error, value: tasks } = useAppSelector(state => state.getTasks);

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
      <View style={styles.header}>
        <Text style={styles.title}>Task List</Text>
        <Button
          title='Add Task'
          width={120}
          height={40}
          onPress={() => navigation.navigate("TaskCreate")}
          disabled={false}
        />
      </View>
      

      { loading && <Text>Loading...</Text>}
      { tasks && (
        <TaskList data={tasks} navigate={navigation.navigate}/>
      )}
      { error && <ErrorCard text={error} />}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 12
  },
  header: {
    flexDirection: "row", 
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 26
  },
  title: {
    fontWeight: "600",
    fontSize: 42,
    alignSelf: "center"
  },
});