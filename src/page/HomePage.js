import React, { useCallback } from "react";
import PostList from "../components/PostList";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, showModal } from "../redux/actions";
import PostModal from "../components/PostModal";
import { modalState } from "../redux/selector";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState);
  const onModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);
  return (
    <div>
      <PostList />
      <Button variant="primary" onClick={onModal}>
        Create
      </Button>
      <PostModal open={isShow} close={onClose} />
    </div>
  );
};

export default HomePage;
