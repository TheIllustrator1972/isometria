import { styles } from "@/styles";

export const getSection2Styles = () => ({
  container: { width: "100%", height: "100%", gap: 4 },
  title: {
    fontFamily: "Lato",
    fontSize: "36px",
    color: styles.color.white,
    fontWeight: 400,
    width: "60%",
    "@media (max-width: 1024px)": {
      width: "100%",
    },
    "@media (max-width: 600px)": {
      fontSize: "24px",
      width: "100%",
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: 15,
    "@media (max-width: 1024px)": {
      justifyContent: "space-between",
      gap: 5,
    },
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  imagePreviewContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      width: "100%",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  toolsSectionContainer: {
    width: "60%",
    justifyContent: "center",
    height: "100%",
    "@media (max-width: 1024px)": {
      width: "100%",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
});
