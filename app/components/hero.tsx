import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

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
    <div className="mt-[100px] ml-10 max-w-xs md:max-w-2xl">
      <h1 className="text-3xl md:text-6xl font-bold whitespace-pre-wrap">
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
      <div className="flex justify-start gap-3 md:w-2/5 mt-6">
        <a href="https://github.com/hartmandy" className="h-8 w-8">
          <GitHubLogoIcon className="h-full w-full text-neutral-700 transition-all duration-1000 hover:duration-100 ease-in-out hover:text-sky-800" />
        </a>
        <a href="https://linkedin.com/in/hartmandy" className="h-8 w-8">
          <LinkedInLogoIcon className="h-full w-full text-neutral-700 transition-all duration-1000 hover:duration-100 ease-in-out hover:text-sky-600" />
        </a>
        <a href="mailto:mandyhartmandev@gmail.com" className="h-8 w-8">
          <EnvelopeClosedIcon className="h-full w-full text-neutral-700 transition-all duration-1000 hover:duration-100 ease-in-out hover:text-sky-400" />
        </a>
      </div>
    </div>
  );
}
