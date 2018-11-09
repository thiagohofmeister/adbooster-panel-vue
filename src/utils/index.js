import { isObject, transform } from 'lodash'

export function omit (obj) {
  function omitFromObject (obj) {
    return transform(obj, function (result, value, key) {
      if (value === '' || value === undefined || value === null) {
        return
      }

      result[key] = isObject(value) ? omitFromObject(value) : value
    })
  }

  return omitFromObject(obj)
}
