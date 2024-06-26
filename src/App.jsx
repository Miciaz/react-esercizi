import { Container } from "./Component-composition/Container";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import Counter from "./State-2_Refs/Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./Handling-event/MouseClicker";
import { Login } from "./Controlled-form/Login";
import { UncontrolledLogin } from "./uncontrolled-form/UncontrolledLogin";
import { FocusableInput } from "./State-2_Refs/FocusableInput";
import { ToDoList } from "./List-and-State/ToDoList";
import { LanguageContext } from "./context/LanguageContext";
import { useState } from "react";
import { GithubUsers } from "./Data-fetching/Githubusers";
import { HookGithubUser } from "./Custom-hook3/HookGithubUser";
import { Colors } from "./lists/Colors";

//array per il componente Colors
const colors = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Green' },
  { id: 3, name: 'Blue' },
];

export function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <select name="language" id="language" onChange={(e) => handleSetLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <Container title={<h1>App Container</h1>}>
        <Welcome name="John" age={15} />
        <AlertClock />
        <hr />
        <Counter />
        <hr />
        <LanguageContext.Provider value={language}>
          <Clock />
        </LanguageContext.Provider>
        <hr />
        <MouseClicker />
        <hr />
        <Login />
        <hr />
        <UncontrolledLogin />
        <hr />
        <FocusableInput />
        <hr />
        <Colors colors={colors}/>
        <hr />
        <ToDoList />
        <hr />
        <GithubUsers />
        <hr />
        <HookGithubUser username='Miciaz'/>
      </Container>
    </div>
  );
}
