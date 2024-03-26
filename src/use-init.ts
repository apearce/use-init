import { useRef } from "react";

interface RefInterface<T> {
  initialized: boolean;
  value?: T;
}

function useInit<T>(func: () => T): T {
  const initRef = useRef({
    initialized: false
  } as RefInterface<T>);

  if (!initRef.current.initialized) {
    initRef.current.value = func();
    initRef.current.initialized = true;
  }

  return initRef.current.value as T;
}

export default useInit;
