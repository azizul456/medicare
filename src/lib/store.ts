import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from './features/sidebar/toggleSlice'
import React from 'react'

export const makeStore = () => {
  return configureStore({
    reducer: {
      toggle: toggleReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];