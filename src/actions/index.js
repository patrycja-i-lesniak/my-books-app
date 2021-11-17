export const removeItemAction = (itemType, id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {itemType, id}
    };
};

export const addItemAction = (itemType, itemContent) => {
  const getId = () => `_${Math.random().toString(24).substr(2, 8)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

