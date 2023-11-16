import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actions from "../redux/actions";
import { postsState } from "../redux/selector";

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState);
  console.log(posts);
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col key={post._id} xs={6} md={3}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PostList;
