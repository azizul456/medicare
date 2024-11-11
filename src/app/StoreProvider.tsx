'use client';
import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';
import { updateFormData } from '@/lib/features/form/formSlice';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Initialize the store only once
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const formDataLocalStorage = localStorage.getItem('formData');
    if (formDataLocalStorage) {
      const formData = JSON.parse(formDataLocalStorage);
      storeRef.current?.dispatch(updateFormData(formData));
    }
  });

  return <Provider store={storeRef.current}>{children}</Provider>;
}
