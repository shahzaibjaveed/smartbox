import { Navigation, Landing, Indroduction } from "./component";
import React, {useState, useEffect} from "react";
import Loader from "./loader";
const App= () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      <Navigation />
      <section className="bg-[url('./assets/images/background_image.png')] bg-center bg-cover">
        <Landing />
        <Indroduction />
      </section>
    </main>
    )
}
export default App;