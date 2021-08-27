import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet} from 'react-native';
import 'react-native-get-random-values';
import NoteForm from './TodoForm';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {closeModal} from '../../store/todoModalSlice';

const TodoModal = () => {
  const isModalVisible = useAppSelector(
    state => state.todoModal.isModalVisible,
  );
  const dispatch = useAppDispatch();

  return (
    <Modal
      isVisible={isModalVisible}
      onSwipeComplete={() => dispatch(closeModal())}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      style={styles.container}>
      <NoteForm />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
export default TodoModal;
