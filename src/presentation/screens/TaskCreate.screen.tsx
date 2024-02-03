import { useEffect, useState } from "react";
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../navigation/StackNavigator";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import { TaskStatus } from "../../domain/entities/Task";
import { TaskStatusSelector } from "../components/TaskStatusSelector/TaskStatusSelector";
import { Button } from "../components/Button/Button";
import { createTask, createTaskInit } from "../../infrastructure/redux/actions/createTask.actions";
import { ErrorCard } from "../../presentation/components/ErrorCard/ErrorCard";

interface Props extends NativeStackScreenProps<StackParams, "TaskCreate"> {}

export const TaskCreateScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { loading, error, value : createTaskValue } = useAppSelector(state => state.createTask);

  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.PENDING);

  const handleOnChangeTitle = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setTitle(value);
  };

  useEffect(() => {
    if(createTaskValue !== null) {
      navigation.pop();
    }
    return () => {
      dispatch(createTaskInit());
    };
  }, [createTaskValue]);

  return (  
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>Create Task</Text>
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
          title="Create"
          onPress={() => dispatch(createTask(title, status))}
          disabled={loading}
        />

        <Button
          title="Cancel"
          onPress={() => navigation.pop()}
          disabled={loading}
          type='secondary'
        />
      </View>

      { error && <ErrorCard text={error}/>}
      
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