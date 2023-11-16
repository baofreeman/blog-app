import { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { updatePost } from "../redux/actions";

function Post({ post }) {
  const dispatch = useDispatch();
  const onLike = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={post.attachment} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <div onClick={onLike}>{post.likeCount}</div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
