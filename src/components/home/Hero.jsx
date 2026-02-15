export default function Hero({ bgImg, children }) {
  return (
    <div className={`${bgImg ? bgImg : ""} bg-no-repeat hero `}>
      <div className="hero-overlay"></div>
      <div className="hero-content py-40 text-neutral-content text-center">
        {children}
      </div>
    </div>
  );
}
