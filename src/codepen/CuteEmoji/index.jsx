import React from 'react'
import './index.less'

const CuteEmoji = ({ type }) => {
  let emojiMoodclassNames= ''
  switch (type) {
    case 'love':
    case 'sad':
    case 'laugh':
      emojiMoodclassNames = 'mouth tounge'
      break
    case 'grin':
      emojiMoodclassNames = 'mouth teath tounge'
      break
    default:
      emojiMoodclassNames = 'mouth'
  }

  return (
    <div className={`emoji emoji--${type}`}>
      <figure className="face">
        {/* 对于love类型的emoji单独处理～ */}
        {
          type === 'love' ? (
            <span className="eyes">
              <span className="heart-eye">
                <span className="heart"></span>
              </span>
              <span className="heart-eye">
                <span className="heart"></span>
              </span>
            </span>
          ) : (
            <span className="eyes">
              <span className="eye"></span>
              <span className="eye"></span>
            </span>
          )
        }
        <span className={emojiMoodclassNames}>
        </span>
      </figure>
    </div>
  )
}

export default CuteEmoji