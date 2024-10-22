import React from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if (!localStorageTodos) {
      localStorageItem.setItem('', JSON.stringify(initialValue));
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    
    config [items, setItems] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem('', JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  }  

export { useLocalStorage };