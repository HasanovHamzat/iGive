// import { call, put, delay } from "redux-saga/effects";

// function* countLitersWorker(action) {
//   try {
//     yield delay(500);
//     const task = yield call(postSaga, action.payload);
//     yield put({ type: ADD_TASK, payload: task }); //go to action getTasks()=>reducer case GET_TASKS.
//   } catch (e) {
//     console.log("fetch failed.");
//   }
// }

// function* countLitersWatcher() {
//   //watches if action is called to search.
//   yield takeLatest(SEARCH_TASK_SAGA, searchSagaWorker);
// }
