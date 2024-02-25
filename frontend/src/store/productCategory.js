import { atom, selector } from 'recoil';

export const productCategoriesAtom = atom({
  key: 'productCategoriesAtom',
  default: [],
});

export const productCategoriesSelector = selector({
  key: 'productCategoriesSelector',
  get: ({ get }) => {
    return get(productCategoriesAtom);
  },
  set: ({ set }, newValue) => {
    set(productCategoriesAtom, newValue);
  },
});
