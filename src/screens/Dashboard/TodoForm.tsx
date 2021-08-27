import React, {useState, useCallback} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {addTodoItem} from '../../store/todoEntitiesSlice';
import SizedBox from '../../components/SizedBox';
import Priorities from '../../components/Priorities';
import {TodoItem, TodoPriority} from '../../types/todo';
import {useAppSelector, useAppDispatch} from '../../store/hooks';

type TodoFormItem = Pick<TodoItem, 'name' | 'description' | 'priority'>;

const TodoForm = () => {
  const initState = useAppSelector(state => state.todoModal.selectedEntity);

  const [todo, updateTodo] = useState<TodoFormItem>({
    name: initState?.name ?? '',
    description: initState?.description ?? '',
    priority: initState?.priority ?? TodoPriority.low,
  });

  const clean = useCallback(() => {
    updateTodo({
      name: '',
      description: '',
      priority: TodoPriority.low,
    });
  }, []);

  const dispatch = useAppDispatch();

  const updateTodos = useCallback(() => {
    dispatch(
      addTodoItem({
        id: initState === null ? uuidv4() : initState.id,
        completed: initState === null ? false : initState.completed,
        createdAt: initState === null ? Date.now() : initState.createdAt,
        ...todo,
      }),
    );
    clean();
  }, [clean, dispatch, initState, todo]);

  return (
    <View style={styles.content}>
      <TextInput
        autoFocus={true}
        style={styles.input}
        inputAccessoryViewID="todoName"
        onChangeText={name => updateTodo({...todo, name})}
        value={todo.name}
        placeholder="Task name"
      />
      <TextInput
        style={styles.input}
        inputAccessoryViewID="todoDescription"
        onChangeText={description => updateTodo({...todo, description})}
        value={todo.description}
        multiline={true}
        numberOfLines={2}
        placeholder="Description"
      />
      <SizedBox height={16} />
      <Text>Select priority</Text>
      <Priorities
        selected={todo.priority}
        onSelect={priority => updateTodo({...todo, priority})}
      />
      <SizedBox height={16} />
      <Button
        title={initState !== null ? 'Save' : 'Create'}
        disabled={todo.name === ''}
        onPress={updateTodos}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
  },
  input: {
    marginTop: 8,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
});
export default TodoForm;
