import React, {useMemo, useState} from 'react';
import {StyleSheet, ImageBackground, FlatList, View, Text} from 'react-native';
import {FAB, Switch} from 'react-native-elements';
import {openModal} from '../../store/todoModalSlice';
import {toggleComplete} from '../../store/todoEntitiesSlice';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import TodoModal from './TodoModal';
import TodoCard from '../../componets/TodoCard';
import {Colors} from '../../theme/colors';
import {backgroundDashboardImage} from '../../theme/images';
import {prepareTodosList, sortTodoList} from '../../helpers/todosHelper';
import SizedBox from '../../componets/SizedBox';

const Dashboard = () => {
  const [showComplete, toggleShowCompleted] = useState(false);
  const todos = useAppSelector(state =>
    sortTodoList(prepareTodosList(state.todos.entities)),
  );

  const filtered = useMemo(() => {
    if (!showComplete) {
      return todos.filter(item => !item.completed);
    }
    return todos;
  }, [showComplete, todos]);

  const dispatch = useAppDispatch();
  return (
    <ImageBackground
      source={backgroundDashboardImage}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.header}>
        <Text>Show completed</Text>
        <Switch
          value={showComplete}
          color={Colors.green}
          onValueChange={toggleShowCompleted}
        />
      </View>
      <FlatList
        data={filtered}
        renderItem={({item}) => (
          <TodoCard
            key={item.id}
            item={item}
            onTodoOpen={() => dispatch(openModal(item))}
            onTodoComplete={() => dispatch(toggleComplete(item.id))}
          />
        )}
      />
      <SizedBox height={16} />
      <FAB
        title="Add todo"
        size="small"
        color={Colors.primaryBlack}
        placement="right"
        onPress={() => dispatch(openModal())}
      />
      <TodoModal />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.9,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default Dashboard;
