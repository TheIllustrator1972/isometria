import clsx from "clsx";

export default function RowSelectNormal(props) {
  const { className } = props;

  return (
    <svg
      className={clsx({ [className]: !!className })}
      viewBox="0 0 77 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.771484"
        y="-0.00170898"
        width="75.4637"
        height="75.4637"
        rx="5"
        fill="white"
      />
      <path
        d="M19.6027 43.6169L7.81445 53.188L19.6027 62.759L31.391 53.188L19.6027 43.6169Z"
        fill="#003049"
      />
      <path
        d="M32.1677 33.2698L20.3794 42.8408L32.1677 52.4119L43.956 42.8408L32.1677 33.2698Z"
        fill="#003049"
      />
      <path
        d="M44.7312 22.9226L32.9429 32.4937L44.7312 42.0647L56.5194 32.4937L44.7312 22.9226Z"
        fill="#003049"
      />
      <path
        d="M57.2961 12.5754L45.5078 22.1465L57.2961 31.7175L69.0844 22.1465L57.2961 12.5754Z"
        fill="#003049"
      />
    </svg>
  );
}
