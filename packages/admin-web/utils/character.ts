import { isMacOS } from "./os";

export const getModCharacter = () => {
  return isMacOS() ? "⌘" : "Ctrl";
};
