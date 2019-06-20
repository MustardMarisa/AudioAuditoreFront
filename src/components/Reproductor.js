import React, { Component } from "react";

class Reproductor extends Component {

    constructor(props) {
        super(props)
        this.createVisualization = this.createVisualization.bind(this)
    }

    componentDidMount() {
        this.createVisualization()
    }

    createVisualization() {
        let context = new AudioContext();
        let analyser = context.createAnalyser();
        let canvas = this.refs.analyzerCanvas;
        let ctx = canvas.getContext('2d');
        let audio = this.refs.audio;
        audio.crossOrigin = "anonymous";
        let audioSrc = context.createMediaElementSource(audio);
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);

        function renderFrame() {
            let freqData = new Uint8Array(analyser.frequencyBinCount)
            requestAnimationFrame(renderFrame)
            analyser.getByteFrequencyData(freqData)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            console.log(freqData)
            ctx.fillStyle = '#9933ff';
            let bars = 100;
            for (var i = 0; i < bars; i++) {
                let bar_x = i * 3;
                let bar_width = 2;
                let bar_height = -(freqData[i] / 2);
                ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
            }
        };
        renderFrame()
    }

    render() {
        return (
            <div>
                <h1>Reproductor</h1>
                <div id="mp3_player">
                    <div id="audio_box">
                        <audio
                            ref="audio"
                            controls={true}
                            src={"https://p.scdn.co/mp3-preview/ce9c1c78df581b33a5d171f657ca2c5a1da6a979?cid=774b29d4f13844c495f206cafdad9c86"}
                        >
                        </audio>
                    </div>
                    <canvas
                        ref="analyzerCanvas"
                        id="analyzer"
                    >
                    </canvas>
                </div>
            </div>
        );
    }
}
export default Reproductor;