import React from 'react';
import HistoryStyles from "./history.module.css";
import { connect } from 'react-redux';
import {AppStateType} from "../../Redux/Store";
import {HistoryItemType} from "../../Redux/HistoryReducer";


type HistoryPropsType = {
    history: Array<HistoryItemType>
}

const History: React.FC<HistoryPropsType> = props => {
    return(<div className={HistoryStyles.Wrap}>
            {props.history.map(item => item.word)}
          </div>)
}

const mapStateToProps = (state: AppStateType) => {
    return {
        history: state.History.historyList,
    }
}

export default connect(mapStateToProps)(History);