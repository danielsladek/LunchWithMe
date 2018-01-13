export const IMAGE_UPLOAD = 'IMAGE_UPLOAD',
             IMAGE_UPLOAD_SUCCESS = 'IMAGE_UPLOAD_SUCCESS',
             IMAGE_UPLOAD_CHANGE = 'IMAGE_UPLOAD_CHANGE',
             IMAGE_UPLOAD_SUBMIT = 'IMAGE_UPLOAD_SUBMIT'

export const imageUploadChange = (state) => ({
    type: IMAGE_UPLOAD_CHANGE,
    payload: state,
});

export const imageUploadSubmit = (state) => ({
    type: IMAGE_UPLOAD_SUBMIT,
    payload: state,
});