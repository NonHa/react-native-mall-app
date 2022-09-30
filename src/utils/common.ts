import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_KEY } from '../utils/constant';
export const setToken = async (value) => {
  try {
    // console.log('set-token-value', value);
    // const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(TOKEN_KEY, value);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(TOKEN_KEY);
    // console.log('value', value);

    return value;
  } catch (e) {
    // saving error
  }
};
export const removeToken = async () => {
  try {
    console.log('remove');

    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    // remove error
  }
};
