import React from "react";

function CatalogDownload({ fileUrl }) {
  const handleDownload = () => {
    window.open(fileUrl, "_blank");
  };

  return (
    <button onClick={handleDownload}>Haz clic aquí para descargar nuestro catálogo</button>
  );
}

export default CatalogDownload;