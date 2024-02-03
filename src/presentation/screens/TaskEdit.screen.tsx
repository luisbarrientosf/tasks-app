import { useEffect, useState } from "react";
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../navigation/StackNavigator";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import { TaskStatus } from "../../domain/entities/Task";
import { TaskStatusSelector } from "../../presentation/components/TaskStatusSelector/TaskStatusSelector";
import { Button } from "../../presentation/components/Button/Button";
import { DeleteTaskModal } from "../../presentation/components/DeleteTaskModal/DeleteTaskModal";
import { deleteTaskInit } from "../../infrastructure/redux/actions/deleteTask.actions";
import { updateTask, updateTaskInit } from "../../infrastructure/redux/actions/updateTasks.actions";

interface Props extends NativeStackScreenProps<StackParams, "TaskEdit"> {}

export const TaskEditScreen: React.FC<Props> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.updateTask.loading);
  const updateTaskValue = useAppSelector(state => state.updateTask.value);
  const deleteTaskValue = useAppSelector(state => state.deleteTask.value);

  const { task } = route.params;
  const [title, setTitle] = useState<string>(task.title);
  const [status, setStatus] = useState<TaskStatus>(task.status);
  const [isDeleteTaskModalVisible, setIsDeleteTaskModalVisible] = useState<boolean>(false);

  const handleOnChangeTitle = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setTitle(value);
  };

  useEffect(()=>{
    if(updateTaskValue !== null || deleteTaskValue !== null) {
      navigation.pop();
    }
    return () => {
      dispatch(updateTaskInit());
      dispatch(deleteTaskInit());
    };
  }, [updateTaskValue, deleteTaskValue]);

  return (  
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>Edit Task</Text>
      <View style={styles.editForm}>
        <View style={styles.formRow}>
          <Text style={styles.label}>Title:</Text>
          <TextInput 
            value={title}
            onChange={handleOnChangeTitle}
            style={styles.input}
            placeholder="Your task title here"
          />
        </View>
    
        <View  style={styles.formRow}>
          <Text style={styles.label}>Status:</Text>
          <TaskStatusSelector active={status} setActive={setStatus}/>
        </View>

        <Button
          title="Save"
          onPress={() => dispatch(updateTask(task.id, title, status))}
          disabled={loading}
        />

        <Button
          title="Cancel"
          onPress={() => navigation.pop()}
          disabled={loading}
          type="secondary"
        />
      </View>


      <View style={styles.warningContainer}>
        <Text style={styles.warningTitle}> DANGER ZONE</Text>
        <Text style={styles.warningText}> If you want to DELETE this task, press the next button</Text>
        <Button
          title="Delete"
          onPress={() => setIsDeleteTaskModalVisible(true)}
          disabled={loading}
          type="danger"
        />
      </View>
      
      <DeleteTaskModal 
        isVisible={isDeleteTaskModalVisible}
        setIsVisible={setIsDeleteTaskModalVisible}
        task={task}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 12
  },
  editForm: {
    borderColor: "#DADADA",
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    backgroundColor: "white"
  },
  warningContainer: {
    marginTop: 50,
    borderColor: "#DADADA",
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    backgroundColor: "white"
  },
  warningTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#D92626",
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
  },
  warningText: {
    fontWeight: "400",
    fontSize: 14,
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 42,
    marginTop: 10,
    marginBottom: 30
  },
  formRow: {
    marginBottom: 40
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold"
  },
  input: {
    fontSize: 18,
    backgroundColor: "white",
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DADADA",
    paddingHorizontal: 16
  },

});