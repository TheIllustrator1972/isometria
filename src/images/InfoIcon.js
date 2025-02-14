import clsx from "clsx";

export default function InfoIcon(props) {
  const { className } = props;

  return (
    <svg
      className={clsx({ [className]: !!className })}
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_44_174)">
        <path
          d="M49.9526 24.9878C49.9526 38.7555 38.9512 49.9757 25.3979 49.9757C11.8688 49.9757 0.843262 38.7555 0.843262 24.9878C0.843262 11.1955 11.8688 0 25.3979 0C38.9512 0 49.9526 11.1955 49.9526 24.9878ZM21.474 20.4557C20.4629 20.4557 19.6685 21.2641 19.6685 22.244C19.6685 23.2975 20.4629 24.0569 21.474 24.0569H24.122V35.5709H21.0647C20.0296 35.5709 19.2352 36.3794 19.2352 37.3593C19.2352 38.4126 20.0296 39.172 21.0647 39.172H31.1514C32.1864 39.172 32.9809 38.4126 32.9809 37.3593C32.9809 36.3794 32.1864 35.5709 31.1514 35.5709H28.0941V22.7585C28.0941 21.3866 27.4199 20.4557 26.1442 20.4557H21.474ZM21.9314 12.9594C21.9314 14.8212 23.3758 16.2911 25.1813 16.2911C26.9868 16.2911 28.407 14.8212 28.407 12.9594C28.407 11.0975 26.9868 9.62765 25.1813 9.62765C23.3758 9.62765 21.9314 11.0975 21.9314 12.9594Z"
          fill="#CCCCCC"
        />
      </g>
      <defs>
        <clipPath id="clip0_44_174">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="translate(0.843262)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
