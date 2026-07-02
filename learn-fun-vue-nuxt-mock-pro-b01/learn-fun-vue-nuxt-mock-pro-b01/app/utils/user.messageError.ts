epxort const showLoginOrSignUpError = (error: any) => {
    const errors = error?.data?.data?.fieldErrors;
    if (typeof  error?.data?.message !== 'undefined') {
        showToastError(error?.data?.message)
    }

    for (const inputFieldName in errors) {
        for (const inputErrorMessage of errors[inputFieldName]) {
            showToastError(inputErrorMessage)
        }
    }
}