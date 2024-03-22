export const voiceWord = function (word, event) {
    console.log(event);
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();
    /* console.log(voices[2]); */
    let message = new SpeechSynthesisUtterance();
    message.text = word;

    synth.speak(message);
    const e = event.currentTarget;
    message.onstart = function () {
        e.classList.toggle("active");
    };
    message.onend = function () {
        e.classList.toggle("active");
    };
};
/* переписать функцию воспроизведения голоса */
