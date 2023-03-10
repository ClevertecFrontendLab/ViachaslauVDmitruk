/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BookStateProps, OneBookProps } from './types';

const initialState: BookStateProps = {
  isLoading: false,
  book: {
    id: '',
    title: '',
    rating: null,
    issueYear: '',
    description: '',
    publish: '',
    pages: '',
    cover: '',
    weight: '',
    format: '',
    ISBN: '',
    producer: '',
    authors: [],
    images: [],
    categories: [],
    comments: [],
    booking: {
      id: '',
      order: false,
      dateOrder: '',
      customerId: '',
      customerFirstName: '',
      customerLastName: '',
    },
    delivery: {
      id: '',
      handed: false,
      dateHandedFrom: '',
      dateHandedTo: '',
      recipientId: '',
      recipientFirstName: '',
      recipientLastName: '',
    },
    histories: [],
  },
  isError: false,
};

export const oneBookSlice = createSlice({
  name: 'onebook',
  initialState,
  reducers: {
    getOneBook: (state, action: PayloadAction<number | string>) => {
      state.isLoading = true;
    },
    setOneBook: (state, action: PayloadAction<OneBookProps>) => {
      state.isLoading = false;
      state.book = action.payload;
    },
    oneBookError: (state, action: PayloadAction) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getOneBook, setOneBook, oneBookError } = oneBookSlice.actions;

export const oneBookSliceReducer = oneBookSlice.reducer;
