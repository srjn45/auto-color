import React from "react";

export default class AutoColor extends React.Component {
    constructor(props) {
        super(props);
        this.hexToRgb = this.hexToRgb.bind(this);
        this.state = { color: '#ffffff', backgroundColor: '#000000' }
    }

    componentWillMount() {
        let bg = this.props.backgroundColor;
        let rgb = [];
        if (bg.startsWith('#')) {
            let hex = bg.replace('#', '').trim();
            rgb = this.hexToRgb(hex);
        } else if (bg.startsWith('rgb')) {
            rgb = bg.replace('rgb', '').replace('(', '').replace(')', '').replace(' ', '').split(',');
            rgb = rgb.map(val => parseInt(val));
        }
        let mean = rgb.reduce((a, b) => a + b, 0) / 3;
        this.setState({ color: mean > this.props.threshold ? '#000000' : '#ffffff' });
    }

    hexToRgb(hex) {
        if (hex.length < 6) {
            return { r: 0, g: 0, b: 0 }
        }
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : [];
    }

    render() {
        return (
            <div style={{ color: this.state.color, backgroundColor: this.props.backgroundColor }}>
                {this.props.children}
            </div>
        )
    }
}