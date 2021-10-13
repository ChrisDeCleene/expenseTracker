import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }));

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const newBudgets = state.map(budget => {
        if(budget.category === action.payload.category) {
          return action.payload;
        }
        return budget;
      })
      return newBudgets;
    }
  }
})

const { actions, reducer } = budgetsSlice;
export const { editBudget } = actions;
export default reducer;

export const selectBudgets = (state) => state.budgets;