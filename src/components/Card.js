import React from "react"
import { Image, CloudinaryContext } from "cloudinary-react"

export default ({ name, description, image }) => (
  <a
    className="db center mw5 black link dim"
    title="Frank Ocean's Blonde on Apple Music"
    href="javascript:function() { return false; }"
  >
    <CloudinaryContext cloudName="dvgmggxmh">
      <Image publicId={image} className="db ba b--black-10" />
    </CloudinaryContext>
    {/* <dl className="mt2 f6 lh-copy">
      <dt className="clip">Name</dt>
      <dd className="ml0 fw9">{name}</dd>
      <dt className="clip">Mesures</dt>
      <dd className="ml0 gray">Frank Ocean</dd>
    </dl>
*/}
  </a>
)
