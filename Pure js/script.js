const DetectLanguage = require('detectlanguage')
const  {promisify} = require("es6-promisify");

const detectLanguage = new DetectLanguage({
    key: '9051af2d5487b4daef1426ecc7cd633f'
})

const detectLanguagePromise = promisify(detectLanguage.detect);
const getLanguagesListPromise = promisify(detectLanguage.languages);

const getTranslate = async (text) => {
    const result = await detectLanguagePromise(text);
    const tranlation = JSON.stringify(result)
    console.log(tranlation);
    return tranlation;
}

getTranslate('Ох этот дивный мир')
