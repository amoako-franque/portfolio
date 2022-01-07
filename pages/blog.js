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
      <h3>What I am Good at ...</h3>
      <PostLink slug="mern" title="MERN STACK" />
      <PostLink slug="python" title="Python " />
      <PostLink slug="Health" title="Health" />
  </Layout>
);


export default Blog