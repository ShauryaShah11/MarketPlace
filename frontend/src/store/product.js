import { atom, selector } from "recoil";

// Atom to represent the product state
export const productState = atom({
  key: "productState",
  default: {
    step: 1,
    product: null,
    editProduct: false,
  }
});

// Selectors to read and update product state
export const stepSelector = selector({
  key: "stepSelector",
  get: ({ get }) => {
    const product = get(productState);
    return product.step;
  },
  set: ({ set }, newValue) => {
    set(productState, (oldValue) => ({
      ...oldValue,
      step: newValue,
    }));
  },
});

export const productSelector = selector({
  key: "productSelector",
  get: ({ get }) => {
    const product = get(productState);
    return product.product;
  },
  set: ({ set }, newValue) => {
    set(productState, (oldValue) => ({
      ...oldValue,
      product: newValue,
    }));
  },
});

export const editProductSelector = selector({
  key: "editProductSelector",
  get: ({ get }) => {
    const product = get(productState);
    return product.editProduct;
  },
  set: ({ set }, newValue) => {
    set(productState, (oldValue) => ({
      ...oldValue,
      editProduct: newValue,
    }));
  },
});

export const resetProductState = selector({
  key: "resetProductState",
  get: ({ get }) => {
    return get(productState); // Add the get callback to return the productState
  },
  set: ({ set }) => {
    set(productState, {
      step: 1,
      product: null,
      editProduct: false,
    });
  },
});
