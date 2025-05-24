export function Hero() {
  const text =
    "Hello, I'm Mandy. Front end engineer currently working at Sports Card Investor.";

  return (
    <div className="mt-[100px] ml-10 md:max-w-xl text-6xl font-bold">
      <p className="flex flex-wrap gap-x-1">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="flex">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                className={`transition-[color] duration-[2000ms] inline-block ${
                  char === " " ? "w-4" : "hover:text-[#FF6B6B]"
                }`}
                style={
                  {
                    "--hover-color":
                      char === " "
                        ? "transparent"
                        : `hsl(${
                            (wordIndex * 15 + charIndex) % 360
                          }, 70%, 60%)`,
                    transitionProperty: "color",
                    transitionDuration: "2000ms",
                    transitionDelay: "0s",
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  if (char !== " ") {
                    e.currentTarget.style.transitionDuration = "0s";
                    e.currentTarget.style.color = `hsl(${
                      (wordIndex * 15 + charIndex) % 360
                    }, 70%, 60%)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (char !== " ") {
                    e.currentTarget.style.transitionDuration = "2000ms";
                    e.currentTarget.style.transitionDelay = "1s";
                    e.currentTarget.style.color = "";
                  }
                }}
              >
                {char}
              </span>
            ))}
            {wordIndex < text.split(" ").length - 1 && <span className="w-4" />}
          </span>
        ))}
      </p>
    </div>
  );
}
