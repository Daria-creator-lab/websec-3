import React from 'react'

export default function Photos({ photos }) {
  return (
    <div className="grid grid-cols-3 gap-8 mt-4">
        {!photos
          ? new Array(12).fill(0).map((_) => <p className='font-bold'>loading...</p>)
          : photos.length > 0
          ? photos.map((photo) => (
                <img src={photo.imageSrc} />
            ))
          : null}
    </div>
  );
}
