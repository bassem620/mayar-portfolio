import Profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container pt-5 h-100 d-flex flex-column-reverse flex-md-row align-items-center justify-content-center">
        <div className="text pe-5">
          <h2 className="text-main mb-3">About me</h2>
          <p className="text-main">
            I am a 23-year old ardent wordsmith, with a zeal for words in all
            their forms. I graduated the faculty of Mass Communication (English
            Section) - Cairo University in May 2022, majoring in journalism, but
            I have always found marketing an intriguing field, where I can
            swiftly blend my zeal for writing and my savoir-faire in generating
            ideas that walk hand in hand with passion, wit, and efficiency.
          </p>
        </div>
        <div className="image shadow-lg">
          <img className="rounded-3" src={Profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
