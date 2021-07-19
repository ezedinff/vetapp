import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import { adminActions as actions } from '.';
import { actions as appActions } from 'app/pages/AppMessages/slice';
import pageData from '../../';
import { getErrorMessage } from 'utils/functions';

function* loadListsOfData(action) {
  try {
    const response = yield call(
      pageData[action.payload.stateIndex]['loadList'],
    );
    const { data } = response;
    const stateIndex = action.payload.stateIndex;
    yield put(
      actions.getAllSuccess({
        data,
        stateIndex,
      }),
    );
  } catch (err) {
    yield put(actions.setLoading(false));
    yield put(
      appActions.setAppAlert({
        message: getErrorMessage(err),
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}

function* createResource(action) {
  try {
    const response = yield call(
      pageData[action.payload.stateIndex]['createOne'],
      action.payload.data,
    );
    if (response.ok) {
      yield put(
        appActions.setAppAlert({
          message: 'created successfully',
          severity: 'success',
          autoHideIn: 2000,
        }),
      );
      yield put(actions.setLoading(false));
    }
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(
      appActions.setAppAlert({
        message: getErrorMessage(error),
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}

function* updateResource(action) {
  try {
    const stateIndex = action.payload.stateIndex;
    const response = yield call(
      pageData[action.payload.stateIndex]['updateOne'],
      action.payload.data,
      { id: action.payload.id },
    );
    if (response.ok) {
      yield put(actions.setLoading(false));
      yield put(actions.getAll({ stateIndex }));

      yield put(
        appActions.setAppAlert({
          message: 'updated successfully',
          severity: 'success',
          autoHideIn: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(
      appActions.setAppAlert({
        message: getErrorMessage(error),
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}

function* deleteResource(action) {
  try {
    const stateIndex = action.payload.stateIndex;
    const response = yield call(pageData[stateIndex].deleteOne, {
      id: action.payload.id,
    });
    yield put(actions.getAll({ stateIndex }));
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(
      appActions.setAppAlert({
        message: getErrorMessage(error),
        severity: 'error',
        autoHideIn: 2000,
      }),
    );
  }
}
export function* adminSaga() {
  yield all([
    takeLatest(actions.getAll.type, loadListsOfData),
    takeLatest(actions.create.type, createResource),
    takeLatest(actions.update.type, updateResource),
    takeLatest(actions.delete.type, deleteResource),
  ]);
}
