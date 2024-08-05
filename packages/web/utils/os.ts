export const isMacOS = () => {
  const platform = (navigator.userAgent || navigator.platform)?.toLowerCase();
  return platform.indexOf("mac") >= 0;
};
