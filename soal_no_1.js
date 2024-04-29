// Fungsi untuk menentukan apakah sebuah pixel kurang colorful
function isLessColorful(r, g, b) {
    const contrastThreshold = 40;
    const contrast = Math.max(r, g, b) - Math.min(r, g, b);
    const lowColorfulness = (r < 50 && g < 50 && b <= 50) || (r > 200 && g > 200 && b > 200);

    return contrast < contrastThreshold || lowColorfulness;
}

// array dari pixel
const pixels = [
    { r: 34, g: 203, b: 55 },
    { r: 67, g: 76, b: 73 },
    { r: 99, g: 105, b: 93 },
    { r: 178, g: 173, b: 169 },
    { r: 144, g: 89, b: 54 },
    { r: 22, g: 20, b: 18 },
    { r: 10, g: 40, b: 50 },
    { r: 171, g: 180, b: 211 },
    { r: 150, g: 150, b: 90 },
    { r: 50, g: 150, b: 150 },
    { r: 209, g: 109, b: 107 },
    { r: 111, g: 117, b: 212 },
    { r: 214, g: 113, b: 165 },
    { r: 45, g: 137, b: 212 },
    { r: 182, g: 240, b: 245 },
    { r: 199, g: 184, b: 72 },
    { r: 204, g: 75, b: 193 },
    { r: 140, g: 132, b: 139 },
    { r: 87, g: 76, b: 63 },
    { r: 170, g: 209, b: 167 },
    { r: 1, g: 90, b: 20 },
    { r: 174, g: 214, b: 174 },
    { r: 196, g: 106, b: 112 },
    { r: 173, g: 166, b: 167 },
    { r: 48, g: 35, b: 46 },
];

// Filter pixel yang colorful
const colorfulPixels = pixels.filter(pixel => !isLessColorful(pixel.r, pixel.g, pixel.b));

console.log(colorfulPixels);