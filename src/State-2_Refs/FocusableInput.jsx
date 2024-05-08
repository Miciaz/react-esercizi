import { useRef, useEffect } from "react";

export function FocusableInput() {
  const mountedRef = useRef(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    } else {
      console.log("Mounting again fot debug purpose");
    }
    inputRef.current?.focus();
  }, []);

  console.log(inputRef);

  return (
    <div>
        <h2>Focusable Input</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}
