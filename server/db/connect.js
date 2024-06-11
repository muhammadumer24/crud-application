const mongo = require("mongoose")

const cnt = async (url) => {
  try {
    await mongo.connect(url)
  } catch (error) {
    console.log(error)
  }
}
module.exports = cnt
