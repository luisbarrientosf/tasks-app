import { TaskStatus } from "../../../domain/entities/Task";
import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";


interface TaskStatusSelectorProps {
  active: TaskStatus;
  setActive: (task: TaskStatus) => void;
}

export const TaskStatusSelector: FC<TaskStatusSelectorProps> = ({ active, setActive }) => {
  const [selected, setSelected] = useState<TaskStatus>(active);
  const pendingStyles: ViewStyle[] = [styles.button, styles.pending];
  if(selected === TaskStatus.PENDING) {
    pendingStyles.push(styles.pendingBackground);
  }

  const completedStyles: ViewStyle[] = [styles.button, styles.completed];
  if(selected === TaskStatus.COMPLETED) {
    completedStyles.push(styles.completedBackground);
  }

  const handlePress = (status: TaskStatus) => {
    setSelected(status);
    setActive(status);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={pendingStyles} onPress={() => handlePress(TaskStatus.PENDING)}>
        <Text style={selected === TaskStatus.PENDING ? styles.buttonTextActive : styles.buttonTextPending}>
          {selected === TaskStatus.PENDING && "✔  "} 
          {TaskStatus.PENDING}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={completedStyles} onPress={() => handlePress(TaskStatus.COMPLETED)}>
        <Text style={selected === TaskStatus.COMPLETED ? styles.buttonTextActive : styles.buttonTextCompleted}>
          {selected === TaskStatus.COMPLETED && "✔  "} 
          {TaskStatus.COMPLETED}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 20
  },
  button: {
    borderRadius: 25,
    height: 36,
    width: "47%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "white"
  },
  buttonTextActive: {
    color: "white",
    fontWeight: "500",
    fontSize: 15
  },
  buttonTextPending: {
    color: "#FECA27",
    fontWeight: "500"
  },
  buttonTextCompleted: {
    color: "#26D926",
    fontWeight: "500"
  },
  pending: {
    borderColor: "#FECA27",
    borderWidth: 2,
  },
  pendingBackground: {
    backgroundColor: "#FECA27",
  },
  completed: {
    borderColor: "#26D926",
    borderWidth: 2,
  },
  completedBackground: {
    backgroundColor: "#26D926"
  }
});