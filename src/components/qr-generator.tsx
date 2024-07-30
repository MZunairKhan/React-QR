import React, { Fragment, useState } from 'react';
import QRCode from "react-qr-code";

function QRGenerator() {

    const [text, setText] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const updateQR = () => {
        setValue('');
        setValue(text);
    }

    return (
        <Fragment>
            <div style={{margin: '10px 0', maxWidth: "100%"}}>
                <button style={{marginRight: '10px'}} onClick={() => updateQR()}>
                    Generate Code
                </button>
                <input
                    type="text"
                    value={text}
                    style={{height: '32px', fontSize: '14px'}}
                    onChange={e => setText(e.target.value)}
                />
            </div>

            {
                value !== '' &&
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%"}}>
                    <QRCode
                        size={256}
                        value={value}
                        viewBox={`0 0 256 256`}
                        style={{ height: "auto", maxWidth: "100%", width: "100%"}}
                    />
                </div>
            }
        </Fragment>
    );
}

export default QRGenerator;
