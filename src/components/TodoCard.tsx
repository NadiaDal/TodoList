import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, CheckBox} from 'react-native-elements';
import SizedBox from './SizedBox';
import {TodoItem} from '../types/todo';
import {Icon} from 'react-native-elements';
import {Colors, Priority} from '../theme/colors';

interface TodoCardProps {
  item: TodoItem;
  onTodoOpen: () => void;
  onTodoComplete: () => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  item,
  onTodoOpen,
  onTodoComplete,
}) => {
  const cardOpacity = item.completed ? 0.75 : 0.9;
  const nameDecoration = item.completed ? 'line-through' : 'none';
  return (
    <TouchableOpacity onPress={onTodoOpen}>
      <Card
        key={item.id}
        containerStyle={{...styles.container, opacity: cardOpacity}}>
        <View style={styles.checkContainer}>
          <CheckBox
            containerStyle={styles.checkbox}
            checkedColor={Colors.green}
            uncheckedColor={Colors.green}
            checked={item.completed}
            onPress={onTodoComplete}
          />
          <Text style={{...styles.title, textDecorationLine: nameDecoration}}>
            {item.name}
          </Text>
        </View>
        {item?.description && item.description.length > 0 ? (
          <Text style={styles.description}>{item.description}</Text>
        ) : null}
        <SizedBox height={8} />
        <Icon
          name="tour"
          style={styles.icon}
          color={Priority[item.priority] as unknown as string}
        />
      </Card>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    opacity: 0.9,
    borderRadius: 8,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    paddingLeft: 8,
  },
  icon: {
    alignSelf: 'flex-start',
    paddingLeft: 8,
  },
  checkContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkbox: {
    paddingLeft: 0,
  },
});

export default TodoCard;
