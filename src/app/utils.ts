export const getImagePath = (url: string) => {
  const newURL = `${
    process.env.NODE_ENV === "production" ? "/isometria" : ""
  }${url}`;
  return newURL;
};
