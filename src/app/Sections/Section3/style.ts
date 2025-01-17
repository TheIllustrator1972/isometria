import { styles } from "@/styles";

export const getSection3Styles = () => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  connect: {
    fontWeight: 600,
    fontFamily: "Lato",
    fontSize: "40px",
    color: styles.color.white,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    "@media (max-width: 1024px)": {
      flexDirection: "row",
    },
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      height: "100%",
    },
  },
  mailIconContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  mailIcon: {
    color: styles.color.white,
    fontSize: "180px",
    "@media (max-width: 600px)": {
      fontSize: "100px",
    },
  },
  imagePreview: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      width: "80%",
      height: "auto",
    },
  },
  ccText: {
    fontFamily: "Roboto",
    color: styles.color.white,
    fontSmooth: 1,
    opacity: 0.5,
    fontWeight: 500,
  },
});
