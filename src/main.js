/*  
HTML5 Speech Experiment
==========

An experiment to use the still-in-development (as of Mar 2018) Web Speech API.

(Shaun A. Noordin || shaunanoordin.com || 20180301)
********************************************************************************
 */

/*  Primary App Class
 */
//==============================================================================
class App {
  constructor() {
    //Set App elements.
    //--------------------------------
    this.html = {
      mainText: document.getElementById("main-text"),
      listenButton: document.getElementById("listen-button"),
      speakButton: document.getElementById("speak-button"),
    };
    this.speechRecognition = null;
    this.speechSynthesis = null;
    this.listenStatus = "";
    //--------------------------------
    
    //Bind functions.
    //--------------------------------
    this.onListenStart = this.onListenStart.bind(this);
    this.onListenEnd = this.onListenEnd.bind(this);
    this.onListenResults = this.onListenResults.bind(this);
    this.onListenError = this.onListenError.bind(this);
    this.listenButton_onClick = this.listenButton_onClick.bind(this);
    this.speakButton_onClick = this.speakButton_onClick.bind(this);
    //--------------------------------
    
    //Speech Recognition
    //--------------------------------
    //First check: do we have Speech Recognition on this browser?
    //Chrome uses the webkit prefix, and Chrome 64is the only browser that I've
    //managed to successfully test with.
    try {
      if ("webkitSpeechRecognition" in window) {  //Chrome
        this.speechRecognition = new webkitSpeechRecognition();
      } else if ("SpeechRecognition" in window) {  //Should be the future "standard"
        this.speechRecognition = new SpeechRecognition();
      }
    } catch (err) { console.error("SpeechRecognition error: ", err); }
    
    if (this.speechRecognition) {
      //Note that SpeechRecognition has to be triggered by a user event, e.g.
      //voiceButton.onClick = () => { this.speechRecognition.start() }
      //This will then prompt the user to provide mic permissions.
      
      this.speechRecognition.onstart = this.onListenStart;  
      this.speechRecognition.onend = this.onListenEnd;
      this.speechRecognition.onresult = this.onListenResults;
      this.speechRecognition.onerror = this.onListenError;

      this.html.listenButton.onclick = this.listenButton_onClick;
      this.html.speakButton.onclick = this.speakButton_onClick;
    } else {
      this.html.listenButton.textContent = "(Can't listen)";
      this.html.listenButton.className = "disabled button";
    }
    //--------------------------------
  }
  
  //----------------------------------------------------------------
  
  //onListenStart: update the HTML elements to indicate the current state.
  //Triggers on SpeechRecognition.start()
  onListenStart(e) {
    console.log("onListenStart: ", e);
    this.listenStatus = "listening";
    this.html.listenButton.textContent = "Listening...";
    this.html.listenButton.className = "active button";
  }
  
  //onListenEnd: update the HTML elements to indicate the current state.
  //Triggers on SpeechRecognition.stop(), or when SpeechRecognition.onresult()
  //returns a result.
  onListenEnd(e) {
    console.log("onListenEnd: ", e);
    this.listenStatus = "";
    this.html.listenButton.textContent = "Listen";
    this.html.listenButton.className = "button";
  }
  
  //onListenResults: process all recognised words.
  //Triggers when SpeechRecognition recognises a a series of words. (Usually
  //when it detects a pause, indicating the end of a sentence.) This will
  //trigger SpeechRecognition.onend() as well.
  onListenResults(e) {
    if (e && e.results) {
      let text = this.html.mainText.value.replace(/\s+$/g, '') + ' ';
      for (let i = 0; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          for (let j = 0; j < e.results.length; j++) {
            text += e.results[i][j].transcript + ' ';
          }
        }
      }
      this.html.mainText.value = text;
    }
  }
  
  onListenError(err) {
    console.error("onListenError: ", err);
  }
  
  //----------------------------------------------------------------
  
  listenButton_onClick() {
    if (!this.speechRecognition) return;
    
    if (this.listenStatus === "listening") {
      this.speechRecognition.stop();
    } else {
      this.speechRecognition.start();
    }
  }
  
  speakButton_onClick() {
  }
}
//==============================================================================

/*  Initialisations
 */
//==============================================================================
var app;
window.onload = function() {
  window.app = new App();
};
//==============================================================================
