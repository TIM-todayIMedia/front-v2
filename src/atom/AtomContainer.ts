import { atom } from "recoil";

export const imgsAtom = atom<string[]>({
  key: "imgsAtom",
  default: [],
});
