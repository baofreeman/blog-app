import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FileBase64 from "react-file-base64";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions";

function PostModal({ open, close }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    content: "",
    attachment: "",
  });
  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [data, dispatch]);
  return (
    open && (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={data.content}
                  onChange={(e) =>
                    setData({
                      ...data,
                      content: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <FileBase64
                  accept="image/*"
                  multiple={false}
                  type="file"
                  value={data.attachment}
                  onDone={({ base64 }) =>
                    setData({ ...data, attachment: base64 })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  );
}

export default PostModal;
