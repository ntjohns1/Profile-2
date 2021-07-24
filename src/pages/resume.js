import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import portfolioResume from './portfolioResume.pdf';

export default function Resume() {
    const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
      className='row'
      file={portfolioResume}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ),
      )}
    </Document>
  );
}
