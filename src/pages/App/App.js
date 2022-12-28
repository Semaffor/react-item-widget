import React from "react";
import PostPage from "../PostPage/PostPage";
import Container from "../../components/Container/Container";
import AddPost from '../../components/AddPost/AddPost'

function App() {
  return (
    <div className="App">
      <Container>
        <PostPage/>
      </Container>
    </div>
  );
}

export default App;
