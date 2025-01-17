import clsx from "clsx";

export default function SingleTileIcon(props) {
  const { className } = props;

  return (
    <svg
      className={clsx({ [className]: !!className })}
      viewBox="0 0 77 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.765625"
        y="-0.00170898"
        width="75.4637"
        height="75.4637"
        rx="5"
        fill="white"
      />
      <path
        d="M38.4947 19.3325L15.835 37.7302L38.4947 56.1279L61.1544 37.7302L38.4947 19.3325Z"
        fill="#003049"
      />
    </svg>
  );
}
