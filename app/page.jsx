import CatWindow from "@components/CatWindow";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Generate Random
        <br className="max-md:hidden" />
        <span className="orange_gradient  text-center"> Cat Images</span>
        </h1>
        <p className="desc text-center">
            Get a random image of a cat by clicking the button below.
        </p>
        <CatWindow/>
    </section>
  )
}

export default Home;