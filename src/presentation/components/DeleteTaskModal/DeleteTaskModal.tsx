import React, { FC, useEffect } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { deleteTask, deleteTaskInit } from "../../../infrastructure/redux/actions/deleteTask.actions";
import { useAppDispatch, useAppSelector } from "../../../infrastructure/redux/hooks";
import { Task } from "../../../domain/entities/Task";
import { Button } from "../Button/Button";

interface DeleteTaskModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  task: Task;
}

export const DeleteTaskModal: FC<DeleteTaskModalProps> = ({ task, isVisible, setIsVisible }) => {
  const { loading, value } = useAppSelector(state => state.deleteTask);

  const dispatch = useAppDispatch();
  useEffect(()=>{
    if(value){
      setIsVisible(false);
    }
    return () => {
      dispatch(deleteTaskInit());
    };
  }, [value]);
  return (
    <Modal
      visible={isVisible}
      transparent
      statusBarTranslucent
      animationType="fade"
    >
      <Pressable
        style={styles.background}
        onPress={()=>setIsVisible(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text style={styles.title}>Are you sure?</Text>
            <Text style={styles.taskText}>{task.title}</Text>
            <Text style={styles.warningText}>This action will delete this task.</Text>
      
            <View style={styles.buttonsContainer}>
              <Button
                title="Delete"
                onPress={() => dispatch(deleteTask(task.id))}
                disabled={loading}
                type='danger'
              />
              <Button
                title="Cancel"
                onPress={() => setIsVisible(false)}
                disabled={loading}
                type='secondary'
              />
            </View>
  
          </View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    padding: 20,
    zIndex: 0,
  },
  container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 26,
    paddingHorizontal: 26,
    elevation: 10,
    zIndex: 1
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center"
  },
  warningText: {
    textAlign: "center",
    color: "#666666",
    fontWeight: "300",
    fontSize: 16
  },
  taskText: {
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    color: "#222222",
  },
  buttonsContainer: {
    marginTop: 40,
  }
});