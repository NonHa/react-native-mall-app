import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken, setToken } from '../../../utils/common';
import { getUserInfo } from '../../../api/user';
const getTokens = createAsyncThunk('/info/getToken', async () => {
  // console.log('await getToken()', await getToken());

  return await getToken();
});

const getInfo = createAsyncThunk('/info/item', async () => {
  const message = await getUserInfo({});
  // console.log('await getUserInfo()', message);
  return message.data || {};
});
const initialState = {
  value: 0,
  token: null,
  info: {},
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      setToken(action.payload);
      // state.info = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTokens.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(getInfo.fulfilled, (state, action) => {
      state.info = action.payload;
    });
  },
});

export const { setUserInfo } = infoSlice.actions;
export { getTokens, getInfo };
export default infoSlice.reducer;
