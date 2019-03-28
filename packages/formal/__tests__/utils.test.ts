import * as yup from 'yup'
import {
  objectIsEmpty,
  formatYupErrors,
  schemaHasAsyncValidation,
} from '../src/utils'

describe('utils', () => {
  describe('objectIsEmpty()', () => {
    it('should be true when object is empty', () => {
      const isEmpty = objectIsEmpty({})

      expect(isEmpty).toBeTruthy()
    })

    it('should be false when object is not empty', () => {
      const isEmpty = objectIsEmpty({ empty: false })

      expect(isEmpty).toBeFalsy()
    })
  })

  describe('formatYupErrors()', () => {
    it('should format yup errors correctly', () => {
      const errorMessages = {
        firstName: 'firstName is required',
        lastName: 'lastName is required',
      }
      const yupError = {
        inner: [
          {
            path: 'firstName',
            message: errorMessages.firstName,
          },
          {
            path: 'lastName',
            message: errorMessages.lastName,
          },
        ],
      }

      const errors = formatYupErrors(yupError)

      expect(errors).toEqual(errorMessages)
    })

    it('should not duplicate yup errors', () => {
      const errorMessages = {
        firstName: 'firstName is required',
        lastName: 'lastName is required',
      }
      const yupError = {
        inner: [
          {
            path: 'firstName',
            message: errorMessages.firstName,
          },
          {
            path: 'firstName',
            message: errorMessages.firstName,
          },
          {
            path: 'lastName',
            message: errorMessages.lastName,
          },
        ],
      }

      const errors = formatYupErrors(yupError)

      expect(errors).toEqual(errorMessages)
    })

    it('should return empty error object when inner is empty', () => {
      const yupError = { inner: [] }

      const errors = formatYupErrors(yupError)

      expect(errors).toEqual({})
    })

    it('should return empty error object when yupError is undefined', () => {
      const errors = formatYupErrors(undefined)

      expect(errors).toEqual({})
    })
  })

  describe('schemaHasAsyncValidation()', () => {
    it('should be false when no async validation', () => {
      const schema = yup.object().shape({
        name: yup.string().required(),
        age: yup
          .number()
          .required()
          .positive()
          .integer(),
      })

      const hasAsync = schemaHasAsyncValidation(schema, {
        name: 'Peter Parker',
        age: 40,
      })

      expect(hasAsync).toBeFalsy()
    })

    it('should be true when there is async validation', () => {
      const schema = yup
        .number()
        .test('is-42', 'Number should be 42', value =>
          Promise.resolve(value !== 42)
        )

      const hasAsync = schemaHasAsyncValidation(schema, 42)

      expect(hasAsync).toBeTruthy()
    })
  })
})
