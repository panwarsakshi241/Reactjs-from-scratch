import Header from "./Components/Header/Header";
import Examples from "./Components/Examples/Examples";
import CoreConcepts from "./Components/CoreConcept/coreConcepts";
function App() {
  

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples/>
      </main>
    </>
  );
}

export default App;
