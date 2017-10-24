import {bits} from '../utils';

const bricks = [];

export function loadBricks(bkg) {
    if (bricks.length === 0) {
        for (let i = 197; i <= 18099; ++i) {
            bricks.push(loadBrick(bkg, i));
        }
    }
    return bricks;
}

function loadBrick(bkg, entry) {
    const dataView = new DataView(bkg.getEntry(entry));
    const height = dataView.getUint8(1);
    const offsetX = dataView.getUint8(2);
    const offsetY = dataView.getUint8(3);
    const buffer = new ArrayBuffer(48 * 38);
    const pixels = new Uint8Array(buffer);
    let ptr = 4;
    for (let y = 0; y < height; ++y) {
        const numRuns = dataView.getUint8(ptr++);
        let x = 0;
        const offset = () => (y + offsetY) * 48 + x + offsetX;
        for (let run = 0; run < numRuns; ++run) {
            const runSpec = dataView.getUint8(ptr++);
            const runLength = bits(runSpec, 0, 6) + 1;
            const type = bits(runSpec, 6, 2);
            if (type == 2) {
                const color = dataView.getUint8(ptr++);
                for (let i = 0; i < runLength; ++i) {
                    pixels[offset()] = color;
                    x++;
                }
            }
            else if (type == 1 || type == 3) {
                for (let i = 0; i < runLength; ++i) {
                    pixels[offset()] = dataView.getUint8(ptr++);
                    x++;
                }
            }
            else {
                x += runLength;
            }
        }
    }
    return pixels;
}
