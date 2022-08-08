import RootState from "../store";

// export const selectCount = (RootState) => state.counter.value;
export const selectCount = (RootState) => RootState.counter.value;