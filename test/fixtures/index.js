'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getImage () {
    let id = uuid.uuid()
    return {
      descripption: 'an #awesome picture with #tags #nodejs',
      tags: [ 'awesome', 'tags', 'nodejs' ],
      url: `https://newgram.test/${uuid.v4()}.jpg`,
      likes: 0,
      liked: false,
      userId: uuid.uuid(),
      publicId: uuid.encode(id),
      id: id,
      createdAt: new Date().toString()
    }
  },

  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }
  },

  getUser () {
    return {
      id: uuid.uuid(),
      name: 'A random user',
      username: 'newgram',
      createdAt: new Date().toString()
    }
  }
}

module.exports = fixtures
