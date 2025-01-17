import clsx from "clsx";

export default function SizePicker(props) {
  const { className } = props;

  return (
    <svg
      className={clsx({ [className]: !!className })}
      viewBox="0 0 49 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.95166"
        y="0.207031"
        width="47.4172"
        height="50"
        fill="#D9D9D9"
      />
      <path
        d="M22.9842 32.751V34.707H13.5642V32.751H17.1642V21.927C17.1642 21.543 17.1762 21.151 17.2002 20.751L14.4282 23.091C14.3082 23.187 14.1842 23.251 14.0562 23.283C13.9362 23.307 13.8202 23.307 13.7082 23.283C13.6042 23.259 13.5082 23.223 13.4202 23.175C13.3402 23.119 13.2762 23.059 13.2282 22.995L12.4242 21.867L17.6322 17.391H19.7322V32.751H22.9842ZM33.234 28.323V22.011C33.234 21.507 33.27 20.955 33.342 20.355L27.534 28.323H33.234ZM37.866 28.323V29.811C37.866 29.955 37.818 30.079 37.722 30.183C37.634 30.287 37.498 30.339 37.314 30.339H35.478V34.707H33.234V30.339H25.758C25.574 30.339 25.414 30.287 25.278 30.183C25.15 30.071 25.066 29.935 25.026 29.775L24.762 28.455L33.054 17.415H35.478V28.323H37.866Z"
        fill="#003049"
      />
    </svg>
  );
}
