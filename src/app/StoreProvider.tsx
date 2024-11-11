'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/lib/store'
import { updateFormData,  } from '@/lib/features/form/formSlice'
export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
    // const formDataLocalStorage = localStorage.getItem('formData')
    // if (formDataLocalStorage) {
    //   const formData = JSON.parse(formDataLocalStorage)
    //   storeRef.current.dispatch(updateFormData(formData))
    // }
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
