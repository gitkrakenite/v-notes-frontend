import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todoService from "./todoService";

const initialState = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create new todo
export const createTodo = createAsyncThunk(
  "todo/create",
  async (todoData, thunkAPI) => {
    try {
      // this is a protected route we need our token to create report
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.createTodo(todoData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get my todo
export const getTodo = createAsyncThunk(
  "todo/getTodos",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.getTodo(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete my reports
export const deleteTodo = createAsyncThunk(
  "delete/deleteTodo",
  async (todoId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await todoService.deleteTodo(todoId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// todo slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    resetTodo: (state) => initialState, //won't persist like user
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // .addCase(upda.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.reports = action.payload;
      // })
      // .addCase(upda.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload;
      //   // state.reports = null;
      // })
      .addCase(getTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload.id
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetTodo } = todoSlice.actions;
export default todoSlice.reducer;
