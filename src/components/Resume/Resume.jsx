// import React, { useState, useEffect } from 'react';
// import { Document, Page } from 'react-pdf/dist/entry.webpack';
// // import resume from '../../assets/pdf/Johnny-Kirpalani_Resume.pdf';

// const Resume = props => {
//   const [docState, setDocState] = useState({ numPages: null, pageNumber: 1 });

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setDocState({ numPages });
//   };

//   const { pageNumber, numPages } = docState;

//   return (
//     <div>
//       <Document
//         file="./Johnny-Kirpalani_Resume.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// };

// export default Resume;
