import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES, TAB_BUTTONS} from "../../data";
import Section from "./Section";
function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(buttonSelected) {
    setSelectedTopic(buttonSelected);
    console.log(`TabButton ${buttonSelected} Clicked.`);
  }

  let tabContent = <div>Select a topic please.</div>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const tabItems = TAB_BUTTONS.map( tabs => <TabButton
    isSelected={selectedTopic === tabs}
    onClick={() => handleClick(tabs)}
    label={tabs}
  />) 

  return (
    <>
      <Section id="examples" title="Examples">
        <menu>
          {tabItems}
        </menu>
        {tabContent}
      </Section>
      <h2>Time to get started!</h2>
    </>
  );
}
export default Examples;
