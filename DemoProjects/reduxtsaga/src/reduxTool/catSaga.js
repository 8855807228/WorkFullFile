import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess, getCatsFailure } from "./catState";

function* workGetCatsFetch() {
  try {
    const response = yield call(() =>
      fetch("https://api.thecatapi.com/v1/breeds")
    );
    const cats = yield response.json(); // Parsing the response
    const formattedCatsShortened = cats.slice(0, 10); // Limiting to 10 cats
    yield put(getCatsSuccess(formattedCatsShortened)); // Dispatch success action
  } catch (error) {
    yield put(getCatsFailure()); // Dispatch failure action in case of error
  }
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
