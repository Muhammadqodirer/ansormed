function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-parent">
          <div className="hero-content">
            <h2 className="hero-title">
              Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.
            </h2>
            <p className="hero-text">
              Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p
              uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni
              o’z ishining professionallariga ishonib topshiring.
            </p>
            <a href="#" className="hero-btn">
              Qabulga yozilish
            </a>
          </div>
          <img className="hero-img" src="./hero-img.png" alt="Hero img" />
        </div>
      </section>
    </>
  );
}

export default Hero;
