// Hitung saturasi
function calculateSaturation(r, g, b) {
    return Math.max(r, g, b) - Math.min(r, g, b);
}

function isColorfulImage(pixels, saturationThreshold = 30) {
    let colorfulCount = 0;

    pixels.forEach(pixel => {
        const { r, g, b } = pixel;
        const saturation = calculateSaturation(r, g, b);
        if (saturation > saturationThreshold) {
            colorfulCount++;
        }
    });

    const percentageColorful = (colorfulCount / pixels.length) * 100;
    return percentageColorful > 50; // Menganggap gambar colorful jika lebih dari 50% pixelnya colorful
}

// Contoh array dari pixel
const pixels = [
    { r: 87, g: 76, b: 63 },
    { r: 67, g: 76, b: 73 },
    { r: 99, g: 105, b: 93 },
    { r: 178, g: 173, b: 169 },
    { r: 48, g: 35, b: 46 },
    { r: 22, g: 20, b: 18 },
    { r: 10, g: 40, b: 50 },
    { r: 67, g: 76, b: 73 },
    { r: 173, g: 166, b: 167 },
    { r: 87, g: 76, b: 63 },
    { r: 10, g: 40, b: 50 },
    { r: 99, g: 105, b: 93 },
    { r: 178, g: 173, b: 169 },
    { r: 67, g: 76, b: 73 },
    { r: 22, g: 20, b: 18 },
    { r: 22, g: 20, b: 18 },
    { r: 87, g: 76, b: 63 },
    { r: 140, g: 132, b: 139 },
    { r: 87, g: 76, b: 63 },
    { r: 99, g: 105, b: 93 },
    { r: 99, g: 105, b: 93 },
    { r: 87, g: 76, b: 63 },
    { r: 67, g: 76, b: 73 },
    { r: 173, g: 166, b: 167 },
    { r: 48, g: 35, b: 46 }
];

const imageIsColorful = isColorfulImage(pixels);
console.log(`Image is colorful: ${imageIsColorful}`);