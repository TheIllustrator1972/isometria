import { styles } from "@/styles";

export const getSection1Styles = () => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  appName: {
    color: styles.color.white,
    fontSize: "40px",
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  appLogo: { width: "60px" },
  contentContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    py: 10,
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 1024px)": {
      alignItems: "center",
    },
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
    },
  },
  leftSubsection: {
    width: "40%",
    justifyContent: "center",
    height: "100%",
    gap: 3,
    "@media (max-width: 1024px)": {
      width: "40%",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  rightSubsection: {
    width: "40%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      width: "40%",
    },
    "@media (max-width: 600px)": {
      width: "80%",
    },
  },
  heading: {
    fontFamily: "Lato",
    fontSize: "40px",
    color: styles.color.white,
    fontWeight: 400,
  },
  subHeading: {
    fontFamily: "Lato",
    fontSize: "18px",
    color: styles.color.white,
    fontWeight: 300,
  },
  comingSoom: {
    fontFamily: "Lato",
    fontSize: "18px",
    color: styles.color.white,
    fontWeight: 400,
  },
  downloadActionContainer: { display: "flex", flexDirection: "row", gap: 1 },
});
