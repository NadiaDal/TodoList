import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import SizedBox from "./SizedBox";
import { TodoItem } from "../types/todo";

interface TodoCardProps {
  item: TodoItem;
  onTodoOpen: () => void;
  onTodoComplete: () => void;
}
const TodoCard: React.FC<TodoCardProps> = ({item, onTodoOpen, onTodoComplete}) => {
  return (
    <TouchableOpacity onPress={onTodoOpen}>
      <Card key={item.id} containerStyle={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.description}</Text>
        <SizedBox height={8} />
        <Text>{`Priority: ${item.priority}`}</Text>
        <SizedBox height={8} />
        <Text>{`Completed: ${item.completed}`}</Text>
        <SizedBox height={8} />
        <Button title="Completed" onPress={onTodoComplete} />
      </Card>
    </TouchableOpacity>
  )
};
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    opacity: 0.9,
    borderRadius: 8,
  },
});

export default TodoCard;
