import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TodoPriority} from '../types/todo';

interface PrioritiesProps {
  onSelect: (priority: TodoPriority) => void;
  selected: TodoPriority;
}
const Priorities: React.FC<PrioritiesProps> = ({selected, onSelect}) => {
  return (
    <View style={styles.container}>
      {[TodoPriority.high, TodoPriority.medium, TodoPriority.low].map(
        priority => (
          <TouchableOpacity key={priority} onPress={() => onSelect(priority)}>
            <View style={{...styles.label, backgroundColor: priority === selected ? 'grey' : 'white'}}>
              <Text style={{fontWeight: 'bold'}}>{priority}</Text>
            </View>
          </TouchableOpacity>
        ),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  label :{
    padding: 8,
    borderRadius: 8
  }
});

export default Priorities;
