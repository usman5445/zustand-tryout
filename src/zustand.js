import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  incrementCount: (payload) => {
    console.log(payload);
    set((state) => ({ count: state.count + 1 }));
  },
  decrementCount: (payload) => {
    console.log(payload);
    set((state) => ({ count: state.count - 1 }));
  },
}));

export default useStore;
