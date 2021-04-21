import React from 'react'

const Image = ({ src, alt }) => {
    return (
        <div>
          <img
            src={src}
            alt={alt}
            className="w-full min-h-screen object-cover"
          />
        </div>
    )
}

export default Image
