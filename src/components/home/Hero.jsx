export default function Hero() {
  return (
    <div className="bg-[url(/assets/images/header-hero.jpg)] bg-no-repeat hero ">
      <div className="hero-overlay"></div>
      <div className="hero-content py-40 text-neutral-content text-center">
        <div className="max-w-md">
          <h2 className="text-6xl">we all love</h2>
          <h1 className="text-9xl">nature</h1>

          <p className="py-6 max-w-80">
            Look deep into nature, and you will understand everything better.
          </p>
          <button className="btn  btn-warning btn-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
}
