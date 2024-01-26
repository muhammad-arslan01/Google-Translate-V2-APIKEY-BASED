const dotenv = require('dotenv');
dotenv.config({});


const {Translate} = require('@google-cloud/translate').v2;
// Creates a client
const translate = new Translate({
    key:process.env.APIKEY
});
async function detectLanguage() {//provides only identification
  let [detections] = await translate.detect("Hola soy Arslan, vivo en California");
  detections = Array.isArray(detections) ? detections : [detections];
  console.log('Detections:');
  detections.forEach(detection => {
    console.log(`${detection.input} => ${detection.language}`);
  });
}
async function translateFunction(){//provides both identification and translation
    let translated=await translate.translate("Hellow I am Arslan, I live in California","es");
    console.log("translatedText",{translatedText:JSON.stringify(translated)});
}
detectLanguage();
translateFunction();
