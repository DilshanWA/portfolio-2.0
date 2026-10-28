import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <p className="text-sm font-light mb-5">
      A Passionate{" "}
      <TypeAnimation
        sequence={[
          "Software Engineer",
          2000,
          "Web Developer",
          2000,
          "React Developer",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-accent font-bold text-[20px]"
      />
    </p>
  );
}