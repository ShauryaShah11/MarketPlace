import { atom, selector } from "recoil";

// Atom to represent the authentication state
export const authState = atom({
  key: "authState",
  default: {
    token: localStorage.getItem("token")
      ? localStorage.getItem("token").replace(/"/g, "")
      : null,
    signupData: null,
    loading: false,
  },
});

// Selectors to read and update authentication state
export const tokenSelector = selector({
  key: "tokenSelector",
  get: ({ get }) => {
    const auth = get(authState);
    return auth.token;
  },
  set: ({ set }, newValue) => {
    set(authState, (oldValue) => ({
      ...oldValue,
      token: newValue,
    }));
  },
});

export const signupDataSelector = selector({
  key: "signupDataSelector",
  get: ({ get }) => {
    const auth = get(authState);
    return auth.signupData;
  },
  set: ({ set }, newValue) => {
    set(authState, (oldValue) => ({
      ...oldValue,
      signupData: newValue,
    }));
  },
});

export const loadingSelector = selector({
  key: "loadingSelector",
  get: ({ get }) => {
    const auth = get(authState);
    return auth.loading;
  },
  set: ({ set }, newValue) => {
    set(authState, (oldValue) => ({
      ...oldValue,
      loading: newValue,
    }));
  },
});
