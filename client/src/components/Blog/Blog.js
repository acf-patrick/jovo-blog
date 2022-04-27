import Loading from "../Loading/Loading";

const Blog = ({ datas }) => {
  return datas ? <></> : <Loading message="Loading blog content...">

  </Loading>;
};

export default Blog;
