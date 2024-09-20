import ky from "ky";

const isProd = process.env.NODE_ENV === "production";

const isDeployProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

export const getUrlOrigin = () => {
  if (isDeployProd) {
    return "https://www.dokkebipark.com";
  } else if (isProd) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    return `http://localhost:${process.env.PORT || "3000"}`;
  }
};

const baseUrl = getUrlOrigin();

export const api = ky.create({
  prefixUrl: baseUrl,
});
