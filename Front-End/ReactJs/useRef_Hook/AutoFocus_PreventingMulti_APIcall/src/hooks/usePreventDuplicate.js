import { useRef } from "react";

export default function usePreventDuplicate() {
  const isRunning = useRef(false);

  const run = async (callback) => {
    if (isRunning.current) return;
    isRunning.current = true;

    try {
      await callback();
    } finally {
      isRunning.current = false;
    }
  };

  return run;
}
