import { combineReducers } from "redux";

import DashBoardReducer from "../dashboard/dashBoardReducer";
import TabReducer from "../common/tab/tabReducer";
import billingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab: TabReducer,
    billingCycle: billingCycleReducer
})
export default rootReducer