let svgLargeur = 0;
let svgHauteur = 0;

export function setSvgDimensions(width, height) {
    svgLargeur = width;
    svgHauteur = height;
}

export function getSvgDimensions() {
    return { svgLargeur, svgHauteur };
}
