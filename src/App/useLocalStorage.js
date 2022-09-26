import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );

  const { sincronizedItem, error, loading, item } = state;

  // ACTION CREATORS
  const onError = (error) =>
    dispatch({ type: actionType.error, payload: error });

  const onSuccess = (item) =>
    dispatch({ type: actionType.success, payload: item });

  const onSave = (item) =>
    dispatch({
      type: actionType.save,
      payload: item,
    });

  const onSincronize = () => dispatch({ type: actionType.sincronize });

  // const [sincronizedItem, setSincronizedItem] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifyTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyTodos);
      onSave(newItem);
      // setItem(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionType = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObjet = (state, payload) => ({
  [actionType.error]: {
    ...state,
    error: true,
  },
  [actionType.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionType.save]: {
    ...state,
    item: payload,
  },
  [actionType.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObjet(state, action.payload)[action.type] || state;
};

// function useLocalStorage(itemName, initialValue) {
//   const localStorageItem = localStorage.getItem(itemName);
//   let parsedItem;

//   if (!localStorageItem) {
//     localStorage.setItem(itemName, JSON.stringify(initialValue));
//     parsedItem = initialValue;
//   } else {
//     parsedItem = JSON.parse(localStorageItem);
//   }

//   const [item, setItem] = React.useState(parsedItem);

//   const saveItem = (newItem) => {
//     const stringifyTodos = JSON.stringify(newItem);
//     localStorage.setItem(itemName, stringifyTodos);
//     setItem(newItem);
//   };

//   return [item, saveItem];
// }
