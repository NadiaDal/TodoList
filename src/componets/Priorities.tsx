import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TodoPriority } from "../types/todo";
import { Icon } from "react-native-elements";
import { Colors, Priority } from "../theme/colors";

interface PrioritiesProps {
  onSelect: (priority: TodoPriority) => void;
  selected: TodoPriority;
}

const Priorities: React.FC<PrioritiesProps> = ({ selected, onSelect }) => {
  return (
    <View style={styles.container}>
      {[TodoPriority.high, TodoPriority.medium, TodoPriority.low].map(
        priority => {
          const backgroundColor = priority === selected ? Colors.grey : Colors.white;
          return (
            <TouchableOpacity key={priority} onPress={() => onSelect(priority)}>
              <View style={{ ...styles.label, backgroundColor }}>
                <Icon
                  name="tour"
                  color={Priority[priority] as unknown as string}
                />
              </View>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row"
  },
  label: {
    padding: 8,
    borderRadius: 8
  }
});

export default Priorities;
