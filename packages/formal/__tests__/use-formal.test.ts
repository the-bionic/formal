import { renderHook, cleanup, act } from 'react-hooks-testing-library'
import useFormal from '../src/use-formal'

const initialValues = {
  firstName: 'Tony',
  lastName: 'Stark',
  email: 'ironman@avengers.io',
}

afterEach(cleanup)

describe('useFormal()', () => {
  describe('.isDirty', () => {
    it('should be initially false', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      expect(result.current.isDirty).toBeFalsy()
    })

    it('should be true when the form values change', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      act(() => result.current.change('firstName', 'Logan'))

      expect(result.current.isDirty).toBeTruthy()
    })
  })

  describe('.isValid', () => {
    it('should be initially true', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      expect(result.current.isValid).toBeTruthy()
    })

    it('should be false if the form contain errors', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      act(() =>
        result.current.setErrors({ firstName: 'firstName should be unique' })
      )

      expect(result.current.isValid).toBeTruthy()
    })
  })

  describe('.isValidating', () => {
    it('should be initially false', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      expect(result.current.isValidating).toBeFalsy()
    })

    it('should be true if the form is currently running any validation', () => {})
    it('should be false when the form finish running any validation', () => {})
  })

  describe('.isSubmitting', () => {
    it('should be initially false', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      expect(result.current.isSubmitting).toBeFalsy()
    })

    it('should be true if the form is currently submitting', () => {})
    it('should be false when the form finish submitting', () => {})
  })

  describe('.isSubmitted', () => {
    it('should be initially false', () => {})
    it('should be true when the form finish submitting', () => {})
  })

  describe('.values', () => {
    it('should initially be equal to initial values', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      expect(result.current.values).toBe(initialValues)
    })
  })

  describe('.errors', () => {
    it('should initially return an empty object', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      expect(result.current.errors).toEqual({})
    })
  })

  describe('.change()', () => {
    it('should change the form values', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )
      const newName = 'Logan'
      const newLastName = 'Hi'

      act(() => {
        result.current.change('firstName', newName)
        result.current.change('lastName', newLastName)
      })

      expect(result.current.values.firstName).toBe(newName)
      expect(result.current.values.lastName).toBe(newLastName)
    })
  })

  describe('.setErrors()', () => {
    it('should set the form errors', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )
      const newError = { firstName: 'firstName should be unique' }

      act(() => result.current.setErrors(newError))

      expect(result.current.errors).toEqual(newError)
    })
  })

  describe('.clearErrors()', () => {
    it('should clear the form errors', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )
      const newError = { firstName: 'firstName should be unique' }

      act(() => result.current.setErrors(newError))
      act(() => result.current.clearErrors())

      expect(result.current.errors).toEqual({})
    })
  })

  describe('.reset()', () => {
    it('should reset the form the its last successful state', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      act(() => result.current.change('firstName', 'Logan'))
      act(() => result.current.reset())

      expect(result.current.values).toEqual(initialValues)
    })

    it('should clearErrors()', () => {
      const { result } = renderHook(() =>
        useFormal(initialValues, {
          onSubmit: values => values,
        })
      )

      act(() => result.current.change('firstName', 'Logan'))
      act(() => result.current.reset())

      expect(result.current.errors).toEqual({})
    })
  })

  describe('.validate()', () => {
    it('should throw an error if no schema is provided', () => {
      const { result } = renderHook(() =>
        useFormal(
          {},
          {
            onSubmit: values => values,
          }
        )
      )

      expect(() => result.current.validate()).toThrowError(
        new Error(
          'You cannot call validate if you have not provided any schema.'
        )
      )
    })

    it('should call clearErrors() before validating', async () => {})
    it('should change isValidating only if schema contains async validations', () => {})
    it('should call setErrors() if the validation failed', () => {})
  })

  describe('.submit()', () => {
    it('should call validate() before submitting', async () => {})
    it('should call onSubmit function passed with the current values', () => {})
    // Should we test isSubmitted and isSubmitting here? Since they
    // are already tested.
  })

  describe('.getFieldProps()', () => {
    describe('.disabled', () => {
      it('should be true if the form is validating', () => {})
      it('should be true if the form is submitting', () => {})
    })

    describe('.value', () => {
      it('should be the field value', () => {
        const { result } = renderHook(() =>
          useFormal(initialValues, {
            onSubmit: values => values,
          })
        )

        expect(result.current.getFieldProps('firstName').value).toEqual(
          initialValues.firstName
        )
      })
    })

    describe('.error', () => {
      it('should return undefined if the field does not have any error', () => {
        const { result } = renderHook(() =>
          useFormal(initialValues, {
            onSubmit: values => values,
          })
        )

        expect(result.current.getFieldProps('firstName').error).toBeUndefined()
      })

      it('should return the error message if the field has error', () => {})
    })
  })

  describe('.getResetButtonProps()', () => {
    describe('.disabled', () => {
      it('should be true if the form is not dirty', () => {
        const { result } = renderHook(() =>
          useFormal(initialValues, {
            onSubmit: values => values,
          })
        )

        expect(result.current.getResetButtonProps().disabled).toBeTruthy()
      })

      it('should be false if the form have errors', () => {
        const { result } = renderHook(() =>
          useFormal(initialValues, {
            onSubmit: values => values,
          })
        )

        act(() =>
          result.current.setErrors({ firstName: 'firstName should be unique' })
        )

        expect(result.current.getResetButtonProps().disabled).toBeFalsy()
      })

      it('should be true if the form is validating', () => {})
      it('should be true if the form is submitting', () => {})
    })
  })

  describe('.getSubmitButtonProps()', () => {
    describe('.disabled', () => {
      it('should be true if the form is not dirty', () => {
        const { result } = renderHook(() =>
          useFormal(initialValues, {
            onSubmit: values => values,
          })
        )

        expect(result.current.getSubmitButtonProps().disabled).toBeTruthy()
      })

      it('should be false if the form have errors', () => {
        const { result } = renderHook(() =>
          useFormal(initialValues, {
            onSubmit: values => values,
          })
        )

        act(() =>
          result.current.setErrors({ firstName: 'firstName should be unique' })
        )

        expect(result.current.getSubmitButtonProps().disabled).toBeFalsy()
      })

      it('should be true if the form is validating', () => {})
      it('should be true if the form is submitting', () => {})
    })
  })
})
