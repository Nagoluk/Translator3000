import React from 'react';
import TranslatorStyles from "./translator.module.css"

const Translator: React.FC = () => {
    return(<div className={TranslatorStyles.Wrap}>
            <div className={TranslatorStyles.InputText}>
                <input type="text"/>
                <button>Go</button>
            </div>

            <div className={TranslatorStyles.TranslatedText}>
                Translated text
            </div>
          </div>)
}

export default Translator;