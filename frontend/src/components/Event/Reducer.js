import { IMAGE_UPLOAD_CHANGE, IMAGE_UPLOAD_SUBMIT } from "./Actions";

const initialState = {
    file: '',
    url: ''
};

export const ImageUploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGE_UPLOAD_CHANGE:

          return {
            ...state,
            file: action.payload.file,
            url: action.payload.imagePreviewUrl
          }

        default: {
          return state;
        }
    }
};

export const getImageFile = (state) => state.imageUpload.file;
export const getImageUrl = (state) => state.imageUpload.url;

