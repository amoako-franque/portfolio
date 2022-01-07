import Layout from "../component/Layout"
import fetch from "isomorphic-unfetch"
import Error from "./_error"
import { Component } from "react"
import Image from "next/image"

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/amoako-franque")
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json()

    return { user: data, statusCode }
  }

  render() {
    const { user, statusCode } = this.props

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <Image  width="300" src={user.avatar_url} alt="Reed" height="300px" />
        <p style={{ width: "80vw" }}>
          I am a Pharmacist and a Web Developer. I solve the problem of creating
          a responsive web application that allows companies to reach out to
          customers in a variety of different ways via the internet. Also give
          health counseling to customers. I believe health is one important
          aspect of our lives. I am currently seeking to join a team, or company
          that is interested in my skills. You can visit
          <span>
            <a href="https://github.com/amoako-franque">My GitHub Profile</a>
          </span>{" "}
          #Remote #Part-time #Full-time
          <button>
            Please you can hire me at{" "}
            <a href="mailto:franque@tuta.io">franque@tuta.io</a>
          </button>
        </p>
      </Layout>
    )
  }
}
