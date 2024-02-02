import React, { FC, useCallback } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Task } from "../../../domain/entities/Task";


const width = Dimensions.get("screen").width - 26;
const height = Dimensions.get("screen").height - 176;

interface TaskListProps {
  data: Task[];
}

export const TaskList: FC<TaskListProps> = ({ data }) => {

  const TaskRow: ListRenderItem<Task> = useCallback(({ item }) => {
    return (
      <TouchableOpacity
        style={styles.rowCard}
        onPress={() => {}}
      >
        <Text style={styles.rowTitle}>
          {item.title}
        </Text>
        <Text style={styles.rowStatus}>
          {item.status}
        </Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={TaskRow}
        disableIntervalMomentum
        decelerationRate="fast"
        scrollEnabled
        scrollToOverflowEnabled
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height
  },
  rowCard: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width,
    margin: 1,
    marginBottom: 8,
    elevation: 1,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
    marginBottom: 6,
  },
  rowStatus: {
    color: "#5A5A5A"
  }
});