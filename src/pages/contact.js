import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <article className="cf pa4 mid-gray avenir">
      <div className="fl w-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.3205244345772!2d-9.682843284354977!3d30.511974481714706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b2e0770f3e77%3A0xc6a8b9c8a66d1c78!2sFahd+Hand+Shaped+Surfboards!5e0!3m2!1sen!2sma!4v1564940684164!5m2!1sen!2sma"
          width="100%"
          height="450"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="fl w-50">
        <h2 className="pl4 mt0 f4 fw4 tracked">Contact</h2>
        <form
          className="pl4"
          method="POST"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="mesure">
            <label for="name" className="f6 db mb2">
              Name
            </label>
            <input
              id="name"
              class="input-reset ba b--black-20 br2 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
              placeholder="Name"
            />
            <label for="email" className="f6 db mb2">
              email
            </label>
            <input
              id="email"
              class="input-reset ba b--black-20 br2 pa2 mb2 db w-100"
              type="email"
              placeholder="name@name.com"
              aria-describedby="name-desc"
            />
            <label for="phone" className="f6 db mb2">
              Phone
            </label>
            <input
              id="phone"
              class="input-reset ba b--black-20 br2 pa2 mb2 db w-100"
              type="text"
              placeholder="+212-..."
              aria-describedby="name-desc"
            />
            <label for="comment" className="f6 db mb2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc"
            ></textarea>
            <button
              className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
            >Send</button>
          </div>
        </form>
      </div>
    </article>
  </Layout>
)
