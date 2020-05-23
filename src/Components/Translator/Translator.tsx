import React from 'react';
import TranslatorStyles from "./translator.module.css";

import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import {getHistoryListThunkCreator, getTranslateThunkCreator, setCurrentWordAC} from "../../Redux/TranslateReducer";

import Preloader from "../../Img/Preloader/preloader.gif"

type PropsType = {
    currentWord: string,
    translatedWord: string,
    isWordTranslating: boolean,
    setCurrentWordAC: (symbol: string) => void
    getTranslateThunkCreator: (word: string) => void
    getHistoryListThunkCreator: () => void
}

class Translator extends React.Component <PropsType>{
    componentDidMount(): void {
        this.props.getHistoryListThunkCreator()
    }

    onInputText(event: React.FormEvent<HTMLInputElement>) {
        this.props.setCurrentWordAC(event.currentTarget.value);
    }

    render(){
        return(
            <div className={TranslatorStyles.Wrap}>
                <div className={TranslatorStyles.InputText}>
                    <input type="text" onChange={(event) => this.onInputText(event)} value={this.props.currentWord} />
                    <div className={TranslatorStyles.Button}>
                        {!this.props.isWordTranslating ? <button disabled={this.props.isWordTranslating || this.props.currentWord.length === 0}
                                                                 onClick={() => this.props.getTranslateThunkCreator(this.props.currentWord)} >Go
                                                        </button>
                        : <img src={Preloader} alt="" className={TranslatorStyles.Preloader}/>
                        }
                    </div>
                </div>

                <div className={TranslatorStyles.TranslatedText}>
                {this.props.translatedWord}
                </div>
            </div>)
}
}

const mapStateToProps = (state: AppStateType) => {
    return {
        currentWord: state.Translate.currentWord,
        translatedWord: state.Translate.translatedWord,
        isWordTranslating: state.Translate.isWordTranslating
    }
}


export default connect(mapStateToProps, {setCurrentWordAC, getTranslateThunkCreator, getHistoryListThunkCreator})(Translator);