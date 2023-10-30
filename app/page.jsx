import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />{" "}
        <span className="orange_gradient text-center">
          Thoughts, Feelings, Opinions...
        </span>
      </h1>

      <p className="desc text-center">
        <span className="font-semibold">Share</span> is the place where you can
        express yourself freely without any limitations unless it is against
        moral laws.
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
