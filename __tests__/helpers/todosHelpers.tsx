import { prepareTodosList, sortTodoList } from "../../src/helpers/todosHelper";
import { todoEntities, todoList, todoListSorted } from "../../__mocks__/todos";

describe("prepareTodosList", () => {
    it("should be converted to the list on todos", () => {
      const result = prepareTodosList(todoEntities);
      expect(result).toEqual(todoList);
    });
  },
);

describe("sortTodoList", () => {
    it("should be sorted by priority and created time", () => {
      const result = sortTodoList(todoList);
      expect(result).toEqual(todoListSorted);
    });
  },
);
