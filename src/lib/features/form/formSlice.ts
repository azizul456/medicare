import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const formDataLocalStorage = localStorage.getItem('formData');
let initialFormData = {
  name: '',
  email: ''
};

if (formDataLocalStorage) {
  try {
    initialFormData = JSON.parse(formDataLocalStorage);
  } catch (error) {
    console.error('Error parsing form data from localStorage:', error);
  }
}

interface FormData {
  name: string;
  email: string;
}

const initialState: FormData = {
  name: initialFormData.name,
  email: initialFormData.email,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      Object.assign(state, action.payload);
      localStorage.setItem('formData', JSON.stringify(state));
    },

    resetForm: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem('formData');
    },
  },
});

export const { updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
