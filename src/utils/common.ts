import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (value) => {
  try {
    // console.log('set-token-value', value);
    // const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('token-mall', value);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token-mall');
    // console.log('value', value);

    return value;
  } catch (e) {
    // saving error
  }
};
export const removeToken = async () => {
  try {
    console.log('remove');

    await AsyncStorage.removeItem('token-mall');
  } catch (e) {
    // remove error
  }
};
