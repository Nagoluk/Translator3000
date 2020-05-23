

export type HistoryItemType = {
    word: string,
    translate: string
}
let initState = {
    historyList: [
        {word: "Привет", translate: "Hello"}
    ] as Array<HistoryItemType>
}

export type InitialHistoryType = typeof initState;

const HistoryReducer = (state = initState, action: any): InitialHistoryType => {
    switch (action.type) {

        default: return state
    }
}

export default HistoryReducer;