import smeagolfier from '../../lib/smeagolfier'

export const get = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      translation: 'eggses'
    })
  }

  callback(null, response)
}
