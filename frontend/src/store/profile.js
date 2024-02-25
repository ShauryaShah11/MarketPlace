import { atom, selector } from "recoil";

// Atom to represent the profile state
export const profileState = atom({
  key: "profileState",
  default: {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
  },
});

// Selectors to read and update profile state
export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const profile = get(profileState);
    return profile.user;
  },
  set: ({ set }, newValue) => {
    set(profileState, (oldValue) => ({
      ...oldValue,
      user: newValue,
    }));
    localStorage.setItem("user", JSON.stringify(newValue));
  },
});

export const loadingSelector = selector({
  key: "loadingSelector",
  get: ({ get }) => {
    const profile = get(profileState);
    return profile.loading;
  },
  set: ({ set }, newValue) => {
    set(profileState, (oldValue) => ({
      ...oldValue,
      loading: newValue,
    }));
  },
});