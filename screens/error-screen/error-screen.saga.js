import { takeLatest, put } from 'redux-saga/effects'

export function* showErrorModal({ payload }) {
  const params = {
    //   screen: SCENE_IDS.ERROR_MODAL,
    //   animated: false,
    //   passProps: {
    //     errorKey: payload.error,
    //   },
  }
  yield put(showModal(params))
}

export function* watchForErrors() {
  yield takeLatest(EVENTS.NETWORK_ERROR, showErrorModal)
}
