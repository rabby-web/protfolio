// import { useState } from "react";
// import pdf from '../../public/-text.pdf'
const pdf_download = "../../../../public/damo.pdf";

const Download = () => {
  const handleDownload = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
        window.URL.revokeObjectURL(blobURL);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <div className="py-3 px-5 border my-2 text-lg rounded bg-[#00f37d]">
      {/* <button onClick={() => handleDownload(pdf_download)}>Download PDF</button> */}
      <button onClick={() => handleDownload(pdf_download)}>
        Resume Download
      </button>
    </div>
  );
};

export default Download;
