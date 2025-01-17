import { styles } from "@/styles";

export const sectionStyles = {
  common: {
    container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: styles.color.primary,
      p: 8,
      boxSizing: "border-box",
      "@media (max-width: 1024px)": {
        p: 4,
      },
      "@media (max-width: 600px)": {
        p: 4,
      },
    },
  },
};
