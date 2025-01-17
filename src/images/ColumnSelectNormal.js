import clsx from "clsx";

export default function ColumnSelectNormal(props) {
  const { className } = props;

  return (
    <svg
      className={clsx({ [className]: !!className })}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.217773"
        y="-0.00170898"
        width="75.4637"
        height="75.4637"
        rx="5"
        fill="white"
      />
      <path
        d="M44.1433 33.4165L32.355 42.9876L44.1433 52.5586L55.9315 42.9876L44.1433 33.4165Z"
        fill="#003049"
      />
      <path
        d="M31.758 23.1626L19.9697 32.7336L31.758 42.3047L43.5463 32.7336L31.758 23.1626Z"
        fill="#003049"
      />
      <path
        d="M56.53 43.563L44.7417 53.134L56.53 62.7051L68.3183 53.134L56.53 43.563Z"
        fill="#003049"
      />
      <path
        d="M19.3713 12.7549L7.58301 22.3259L19.3713 31.897L31.1596 22.3259L19.3713 12.7549Z"
        fill="#003049"
      />
    </svg>
  );
}
