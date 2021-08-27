import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoItem, UUID } from "../types/todo";

export const getFromStorage = async (): Promise<Record<UUID, TodoItem> | null> => {
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

export const saveToStorage = async (entities: Record<UUID, TodoItem>) => {
  try {
   await AsyncStorage.setItem('entities', JSON.stringify(entities));
  } catch (error) {
    // TODO add logger
    console.error(error);
  }
}
