import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappendComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TODOS_V1") {
          console.log("Hubo cambios en TODOS_V1");
          setStorageChange(true);
        }
      };

      window.addEventListener("storage", onChange);

      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);

    const toogleShow = () => {
      setStorageChange(false);
      props.sincronize();
    };

    return (
      <React.Fragment>
        <WrappedComponent show={storageChange} toggleShow={toogleShow} />
      </React.Fragment>
    );
  };
}

export { withStorageListener };
