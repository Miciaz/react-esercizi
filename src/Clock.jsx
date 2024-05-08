import { useContext, useEffect, useState } from "react";
import classes from './Clock.module.scss'
import { LanguageContext } from "./context/LanguageContext";

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

  //useContext hook
  const language = useContext(LanguageContext)

  return (
    <div>
      <h2 className={classes.clock}>{language === 'en' ? 'Current time:' : 'Ora attuale:'} {date.toLocaleTimeString()}</h2>
    </div>
  );
}
