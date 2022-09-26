import React from "react";
import "./ChangeAlert.css";

import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (!!show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parace que cambiaste tus TODOs.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>

          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Refrescar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
