import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-16 pb-0 overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: Use 1.jpeg, Desktop: Use 3.jpeg */}
        <img
          src="/images/1.jpeg"
          alt="OMV Gold Buyers - Hero"
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src="/images/3.jpeg"
          alt="OMV Gold Buyers - Hero"
          className="hidden md:block w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Text Content - Center aligned vertically, left aligned horizontally */}
      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <div className="w-full md:max-w-3xl">
          <div className="mb-4 md:mb-6">
            <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight min-h-[3rem] md:min-h-[6rem] drop-shadow-lg text-left">
              <TypingEffect 
                texts={[
                  "Instantly release your pledged gold",
                  "Turn your gold into cash",
                  "Get the best rates for your gold"
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={3000}
                className="text-white drop-shadow-lg"
              />
            </h1>
          </div>
          
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md text-left">
            Get the best rates for your gold with instant cash payment. Release your pledged gold and achieve financial freedom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
