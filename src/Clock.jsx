import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => { //side-effect
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => { //clean up function
        clearInterval(intervalId)
    }
  }, []);

  return (
    <div>
      <h2>Current time: {date.toLocaleTimeString()}</h2>
    </div>
  );
}
