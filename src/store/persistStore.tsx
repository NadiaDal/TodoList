import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoEntities } from "../types/todo";

export const getFromStorage = async (): Promise<TodoEntities | null> => {
  let entities = null;

  try {
    const data = await AsyncStorage.getItem('entities');
    entities = data ? JSON.parse(data) : {};
  } catch (error) {
    // TODO add logger
    console.error(error);
  }
  return entities;
}

export const saveToStorage = async (entities: TodoEntities) => {
  try {
   await AsyncStorage.setItem('entities', JSON.stringify(entities));
  } catch (error) {
    // TODO add logger
    console.error(error);
  }
}
