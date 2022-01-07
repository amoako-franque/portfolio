import Layout from "../component/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog =() => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="python-post" title="Python Post" />
      <PostLink slug="health-post" title="Health Post" />
    </ul>
  </Layout>
);


export default Blog