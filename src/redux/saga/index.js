import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log("[posts]", posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getPosts.getPostsFailure(error));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    console.log("[post]", post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (error) {
    console.log(error);
    yield put(actions.createPost.createPostFailure(error));
  }
}

function* updatePostSaga(action) {
  try {
    console.log(action.payload);
    const updatePost = yield call(api.updatePost, action.payload);
    console.log("[post]", updatePost);
    yield put(actions.updatePost.updatePostSuccess(updatePost.data));
  } catch (error) {
    console.log(error);
    yield put(actions.updatePost.updatePostFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;
