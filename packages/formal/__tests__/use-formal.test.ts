describe('useFormal()', () => {
  describe('.isDirty', () => {
    it('should be initially false', () => {})
    it('should be true when the form values change', () => {})
  })

  describe('.isValid', () => {
    it('should be initially true', () => {})
    it('should be false if the form contain errors', () => {})
  })

  describe('.isValidating', () => {
    it('should be initially false', () => {})
    it('should be true if the form is currently running any validation', () => {})
    it('should be false when the form finish running any validation', () => {})
  })

  describe('.isSubmitting', () => {
    it('should be initially false', () => {})
    it('should be true if the form is currently submitting', () => {})
    it('should be false when the form finish submitting', () => {})
  })

  describe('.isSubmitted', () => {
    it('should be initially false', () => {})
    it('should be true when the form finish submitting', () => {})
  })

  describe('.values', () => {
    it('should initially be equal to initial values', () => {})
  })

  describe('.errors', () => {
    it('should initially return an empty object', () => {})
  })

  describe('.change()', () => {
    it('should change the form values', () => {})
  })

  describe('.setErrors()', () => {
    it('should set the form errors', () => {})
  })

  describe('.clearErrors()', () => {
    it('should clear the form errors', () => {})
  })

  describe('.reset()', () => {
    it('should reset the form the its last successful state', () => {})
    it('should clearErrors()', () => {})
  })

  describe('.validate()', () => {
    it('should throw an error if no schema is provided', () => {})
    it('should call clearErrors() before validating', () => {})
    it('should change isValidating only if schema contains async validations', () => {})
    it('should call setErrors() if the validation failed', () => {})
  })

  describe('.submit()', () => {
    it('should call validate() before submitting', () => {})
    it('should call onSubmit function passed with the current values', () => {})
    // Should we test isSubmitted and isSubmitting here? Since they
    // are already tested.
  })

  describe('.getFieldProps()', () => {
    describe('.name', () => {
      it('should be the same as the field', () => {})
    })

    describe('.id', () => {
      it('should be the same as the field', () => {})
    })

    describe('.disabled', () => {
      it('should be true if the form is validating', () => {})
      it('should be true if the form is submitting', () => {})
    })

    describe('.value', () => {
      it('should be the field value', () => {})
    })

    describe('.error', () => {
      it('should return null if the field has not error', () => {})
      it('should return the error message if the field has error', () => {})
    })
  })

  describe('.getResetButtonProps()', () => {
    describe('.disabled', () => {
      it('should be true if the form is not dirty', () => {})
      it('should be false if the form have errors', () => {})
      it('should be true if the form is validating', () => {})
      it('should be true if the form is submitting', () => {})
    })

    describe('.type', () => {
      it('should be button', () => {})
    })

    describe('.onClick()', () => {
      it('should call reset()', () => {})
    })
  })

  describe('.getSubmitButtonProps()', () => {
    describe('.disabled', () => {
      it('should be true if the form is not dirty', () => {})
      it('should be false if the form have errors', () => {})
      it('should be true if the form is validating', () => {})
      it('should be true if the form is submitting', () => {})
    })

    describe('.type', () => {
      it('should be submit', () => {})
    })
  })
})
