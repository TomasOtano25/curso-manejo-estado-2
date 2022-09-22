import React from "react";

function EmptySearchResult(props) {
  return <p>{`No hay resultados para: ${props.searchText}`}</p>;
}

export { EmptySearchResult };
