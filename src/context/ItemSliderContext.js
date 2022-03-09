import React from 'react';

const ItemSliderContext = React.createContext();

export const ItemSliderProvider = ItemSliderContext.Provider;
export const ItemSliderConsumer = ItemSliderContext.Consumer;

export default ItemSliderContext;
