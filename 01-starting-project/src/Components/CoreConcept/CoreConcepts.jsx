import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "./CoreConcept.jsx";

function CoreConcepts() {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItems) => (
            <CoreConcept key={conceptItems.title}{...conceptItems} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default CoreConcepts;
