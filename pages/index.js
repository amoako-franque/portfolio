import Layout from "../component/Layout"

const Index = () => (
  <Layout title="Home">
    <p>Welcome to the home page</p>
    <p style={{ width: "80vw" }}>
      I am a Pharmacist and a Web Developer. I solve the problem of creating a
      responsive web application that allows companies to reach out to customers
      in a variety of different ways via the internet. Also give health
      counseling to customers. I believe health is one important aspect of our
      lives. I am currently seeking to join a team, or company that is
      interested in my skills. You can visit
      <span>
        <a href="https://github.com/amoako-franque">My GitHub Profile</a>
      </span>{" "}
      #Remote #Part-time #Full-time
      <button>
        Click here to hire me{" "}
        <a href="mailto:franque@tuta.io">franque@tuta.io</a>
      </button>
    </p>
  </Layout>
)

export default Index
