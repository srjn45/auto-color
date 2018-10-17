export const changeColor = (backgroundColor) => {
    return dispatch => {
        let rgb = hexToRgb(backgroundColor);
        let mean = (rgb.r + rgb.g + rgb.b) / 3;
        let threshold = 128;
        let color = mean > threshold ? '000000' : 'ffffff';
        dispatch(dispatchAction('CHANGE_COLOR', { backgroundColor, color }));
    };
}

const dispatchAction = (type, payload = null) => ({
    type: type,
    payload: payload
});

const hexToRgb = (hex) => {
    if (hex.length < 6) {
        return { r: 0, g: 0, b: 0 }
    }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}