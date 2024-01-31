import { HistoryElemType } from "types"

export const setHistoryObj = (g:number, w:number, isM:boolean, mData:string, wData:string) => {
    const resObj:HistoryElemType = {
        type: '',
        date: '',
        total: 0
    }
    if (isM) {
        resObj.type = 'Month'
        resObj.date = mData
        resObj.total = g
    } else {
        resObj.type = 'Week'
        resObj.date = wData
        resObj.total = w
    }
    return resObj
}
