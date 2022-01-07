import Layout from "../component/Layout"

const Error = ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : `Couldn't get that page, sorry!`}
  </Layout>
)

export default Error
