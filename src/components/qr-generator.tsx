import { Fragment, useState } from 'react';
import QRCode from "react-qr-code";
import { saveSvg } from '../utils';

function QRGenerator() {

    const [text, setText] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const updateQR = () => {
        setValue('');
        setValue(text);
    }
    
    const getImage = async () => {
        saveSvg()
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
                        id="qrcode"
                        size={256}
                        value={value}
                        viewBox={`0 0 256 256`}
                        style={{ height: "auto", maxWidth: "100%", width: "100%"}}
                    />
                    <button style={{marginTop: '10px'}} onClick={() => getImage()}>
                        Download Code
                    </button>
                </div>
            }

            <canvas style={{display: 'none'}} id="canvas"></canvas>
            <img  style={{display: 'none'}} id="img01" />
        </Fragment>
    );
}

export default QRGenerator;
