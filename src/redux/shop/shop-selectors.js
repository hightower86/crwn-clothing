import { createSelector } from 'reselect';

const collectionsSelector = (state) => state.shop;

export const selectCollections = createSelector(
  [collectionsSelector],
  (shop) => shop.collections
);
