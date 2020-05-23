import React from 'react';
import HistoryStyles from "./history.module.css";
import { connect } from 'react-redux';
import {AppStateType} from "../../Redux/Store";
import { HistoryItemType } from '../../Redux/TranslateReducer';


type HistoryPropsType = {
    history: Array<HistoryItemType>
}

type tableRowPropsType = {
    originalText: string,
    translatedText: string,
}

const TableRow: React.FC<tableRowPropsType> = props => {
    return(<tr>
                <td>{props.originalText}</td>
                <td>{props.translatedText}</td>
           </tr>)
}

const History: React.FC<HistoryPropsType> = props => {
    return(<div className={HistoryStyles.Wrap}>
                <table>
                    <thead>
                        <tr>
                            <th>Original</th>
                            <th>Translated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.history.reverse().map((item, index) => <TableRow originalText={item.originalText} translatedText={item.translatedText} key={item.originalText + " " + index}/>)}
                    </tbody>

                </table>
          </div>)
}

const mapStateToProps = (state: AppStateType) => {
    return {
        history: state.Translate.historyList,
    }
}

export default connect(mapStateToProps)(History);