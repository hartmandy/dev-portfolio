export function Hero() {
  const text =
    "Hello, I'm Mandy. Front End Engineer currently working at Sports Card Investor.";

  const colors = [
    "hover:text-sky-800",
    "hover:text-sky-700",
    "hover:text-sky-600",
    "hover:text-sky-500",
    "hover:text-sky-400",
  ];

  return (
    <div className="mt-[100px] ml-10 md:max-w-xl">
      <h1 className="text-6xl font-bold whitespace-pre-wrap">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={`inline-block transition-all duration-1000 hover:duration-100 ease-in-out ${
                  colors[(wordIndex * word.length + charIndex) % colors.length]
                }`}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </div>
  );
}
