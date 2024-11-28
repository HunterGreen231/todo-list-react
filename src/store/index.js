import { create } from 'zustand';
import todoSlice from './todo/index'

const store = create((set, get) => ({
    ...todoSlice(set, get)
}));

export default store;