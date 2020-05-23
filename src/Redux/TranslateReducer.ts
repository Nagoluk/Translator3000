export const googleTranslate = require('google-translate')("AIzaSyBf48KI0S3072nBOrtQu6x90mju5AxSOiM");

const SET_CURRENT_WORD = "SET_CURRENT_WORD";
const SET_TRANSLATED_WORD = "SET_TRANSLATED_WORD";
const TOGGLE_IS_WORD_TRANSLATING = "TOGGLE_IS_WORD_TRANSLATING ";
const SET_RECORDS = "SET_RECORDS";
const ADD_RECORD = "ADD_RECORD";

export type HistoryItemType = {
    originalText: string,
    translatedText: string
}

let initState = {
    currentWord: "" as string,
    translatedWord: "" as string,
    isWordTranslating: false as boolean,
    historyList: [] as Array<HistoryItemType>
}


type TranslatorInitStateType = typeof initState;

const TranslateReducer = (state = initState, action: ActionType): TranslatorInitStateType => {
    switch (action.type) {
        case SET_CURRENT_WORD:
            return {
                ...state,
                currentWord: action.symbol
            }

        case SET_TRANSLATED_WORD:
            return {
                ...state,
                translatedWord: action.word
            }


        case TOGGLE_IS_WORD_TRANSLATING:
            return {
                ...state,
                isWordTranslating: !state.isWordTranslating
            }

        case SET_RECORDS:
            return {
                ...state,
                historyList: JSON.parse(JSON.stringify(action.records)),
            }

        case ADD_RECORD: {
            return {
                ...state,
                historyList: [...state.historyList, action.item]
            }
        }


        default: return state
    }
}

type setCurrentWordACT = {type: typeof SET_CURRENT_WORD, symbol: string}
export const setCurrentWordAC = (symbol: string):setCurrentWordACT => ({type: SET_CURRENT_WORD, symbol})

type setTranslatedWordACT = {type: typeof SET_TRANSLATED_WORD, word: string}
export const setTranslatedWordAC = (word: string): setTranslatedWordACT => ({type: SET_TRANSLATED_WORD, word})


type toggleIsWordTranslatingACT = {type: typeof TOGGLE_IS_WORD_TRANSLATING}
export const toggleIsWordTranslatingAC = (): toggleIsWordTranslatingACT =>({type: TOGGLE_IS_WORD_TRANSLATING})

type setRecordsACT = {type: typeof SET_RECORDS, records: Array<HistoryItemType>}
export const setRecordsAC = (records: Array<HistoryItemType>) => ({type: SET_RECORDS, records})

type addRecordACT = {type: typeof ADD_RECORD, item: HistoryItemType}
export const addRecordAC = (item: HistoryItemType) => ({type: ADD_RECORD, item})

type ActionType = setCurrentWordACT | setTranslatedWordACT | toggleIsWordTranslatingACT | setRecordsACT | addRecordACT;


export let getHistoryListThunkCreator = () => {
    return (dispatch: any) => {
        let keys = Object.keys(localStorage);
        let result: Array<HistoryItemType> = [];

        for(let key of keys) {
            result.push({originalText: key, translatedText: localStorage.getItem(key) as string})
        }

       dispatch(setRecordsAC(result));
    }
}


export let getTranslateThunkCreator = (text: string) => {
    return (dispatch: any) => {
        dispatch(toggleIsWordTranslatingAC())
        googleTranslate.translate(text, 'en','ru',  function(err: string, translation: HistoryItemType) {
            localStorage.setItem(translation.originalText, translation.translatedText);
            dispatch(addRecordAC(translation));
            dispatch(setTranslatedWordAC(translation.translatedText));
            dispatch(toggleIsWordTranslatingAC())
        });
    }
}


export default TranslateReducer