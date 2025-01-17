import clsx from "clsx";

export default function FreeDragNormal(props) {
  const { className } = props;

  return (
    <svg
      className={clsx({ [className]: !!className })}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.450928"
        y="0.800781"
        width="66.9307"
        height="66.9307"
        rx="5"
        fill="white"
      />
      <path
        d="M33.9141 43.4446L25.2295 50.4957L33.9141 57.5469L42.5987 50.4957L33.9141 43.4446Z"
        fill="#003049"
      />
      <path
        d="M33.9134 28.4944L25.2288 35.5455L33.9134 42.5967L42.598 35.5455L33.9134 28.4944Z"
        fill="#003049"
      />
      <path
        d="M24.7891 20.9402L16.1045 27.9913L24.7891 35.0425L33.4737 27.9913L24.7891 20.9402Z"
        fill="#003049"
      />
      <path
        d="M43.0389 35.9695L34.3542 43.0206L43.0389 50.0718L51.7235 43.0206L43.0389 35.9695Z"
        fill="#003049"
      />
      <path
        d="M33.9156 13.4646L25.231 20.5158L33.9156 27.5669L42.6002 20.5158L33.9156 13.4646Z"
        fill="#003049"
      />
    </svg>
  );
}
