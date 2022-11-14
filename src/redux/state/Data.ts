import { createSlice} from '@reduxjs/toolkit';
const initialState: any = {
  username:[] as any,
  avatarUser: '' as any,
};

const Data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.username.push(action.payload);
    },
    addAvatar: (state, action) => {
      state.avatarUser=action.payload
    },
}
});

export const {
  addUser,addAvatar
} = Data.actions;
export const selectData = (state:any) => state.data;

export default Data.reducer;
