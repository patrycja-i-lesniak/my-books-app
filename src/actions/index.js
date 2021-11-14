export const removeItemAction = (itemType, id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {itemType, id}
    };
};