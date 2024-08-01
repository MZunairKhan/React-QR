export function saveSvg() {
    let sourceSVG = document.getElementById('qrcode');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let img01 = document.getElementById('img01');

    let xmlSerializer = new XMLSerializer();
    let svgString = xmlSerializer.serializeToString(sourceSVG);

    let url = URL.createObjectURL(
        new Blob([svgString], {type: "image/svg+xml;charset=utf-8"})
    );

    let img = new Image();
    img.addEventListener('load', e => {
        URL.revokeObjectURL(e.target.src);
        canvas.width = e.target.width;
        canvas.height = e.target.height;
        ctx.drawImage(e.target, 0, 0);
        img01.src = canvas.toDataURL('image/png');

        canvas.toBlob(function(blob) {
            if (blob) {
                downloadBlob('QR-Code.png', blob);
            }
        });
    });
    img.src = url;
}

export function downloadBlob(filename, blob) {
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = filename;
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }
}
