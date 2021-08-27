import React from "react";
import {
  StyleSheet,
  ImageBackground,
  FlatList
} from "react-native";
import { FAB } from "react-native-elements";
import { openModal } from "../../store/todoModalSlice";
import { toggleComplete } from "../../store/todoEntitiesSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import TodoModal from "./TodoModal";
import TodoCard from "../../componets/TodoCard";
import { Colors } from "../../theme/colors";
import { backgroundDashboardImage } from "../../theme/images";
import { prepareTodosList, sortTodoList } from "../../helpers/todosHelper";


const Dashboard = () => {
  const todos = useAppSelector(state =>
    sortTodoList(prepareTodosList(state.todos.entities))
  );

  const dispatch = useAppDispatch();
  return (
    <ImageBackground source={backgroundDashboardImage} resizeMode="cover" style={styles.image}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoCard
            key={item.id}
            item={item} onTodoOpen={() => dispatch(openModal(item))}
            onTodoComplete={() => dispatch(toggleComplete(item.id))}
          />
        )}
      />
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
  image: {
    flex: 1,
    justifyContent: "flex-start"
  }
});

export default Dashboard;
