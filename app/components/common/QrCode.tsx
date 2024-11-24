import Link from 'next/link';
import React from 'react'
import QRCode from "react-qr-code";

type Props = {}

const QrCode = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className='bg-white rounded-sm p-2 tablet:p-3'>
        <Link
          href="https://docs.google.com/document/d/1hzJDlsEoO6SkvgVx24uQCasChuXvh57Yuw8eje8v2_Q/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <QRCode value="https://docs.google.com/document/d/1hzJDlsEoO6SkvgVx24uQCasChuXvh57Yuw8eje8v2_Q/edit?usp=sharing" />
        </Link>
      </div>
      <div className="flex flex-col text-center font-semibold">
        <p className="text-xs">Scan or Click the QRCode to</p>
        <p className="text-xs">download my Resume</p>
      </div>
    </div>
  );
}

export default QrCode