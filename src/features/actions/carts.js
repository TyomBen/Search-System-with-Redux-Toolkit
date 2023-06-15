import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../Utills/constants';
export const gettingData = createAsyncThunk (
    'carts/gettingData',
    async (_, thunkAPI) => {
        const { initialStateValue, data } = thunkAPI.getState().carts;
        try {
            if (!data.length && initialStateValue.length < 4) {
                  const response = await axios (`${URL}=cat`);
                  return response.data.results;
              }
                const response = await axios (`${URL}=${initialStateValue}`);
                return response.data.results;
            
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue()
        }
    }
)