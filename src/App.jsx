import { Navigation, Landing, Indroduction } from "./component";
const App= () => {
  return (
    <main>
      <Navigation />
      <section className="bg-[url('./assets/images/background_image.png')] bg-center bg-cover">
        <Landing />
        <Indroduction />
      </section>
    </main>
    )
}
export default App;