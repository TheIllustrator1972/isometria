export const getImagePath = (url: string) =>
  `${process.env.NODE_ENV === "production" ? "/isometria" : ""}${url}`;
