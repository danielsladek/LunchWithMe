import React from "react";
import { imageUploadChange } from "./Actions";
import { connect } from "react-redux";
import { getImageFile, getImageUrl } from "./Reducer";

export class ImageUploadRaw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
    }
  
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.props.imageUploadChange({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
  
    render() {
        let imagePreviewUrl = this.props.url;
        let $imagePreview = null;
        let { handleSubmit } = this.props;

        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
        $imagePreview = (<div className="event-image">Zde se zobrazí náhled obrázku</div>);
        }

        return (
        <div className="previewComponent">
            <form onSubmit={(e) => handleSubmit(e)}>
            <input className="fileInput" 
                type="file" 
                onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
                type="submit" 
                onClick={(e)=>this.props.handleSubmit(e)}>Nahrát fotku</button>
            </form>
            <div className="imgPreview">
            {$imagePreview}
            </div>
        </div>
      )
    }
}

const mapStateToProps = (storeState, props) => {
    return { 
        file: getImageFile(storeState),
        url: getImageUrl(storeState)
    };
  };
  
export function mapDispatchToProps(dispatch) {
    return {
        imageUploadChange: (state) => dispatch(imageUploadChange(state)),
    };
}

export const ImageUpload = connect(mapStateToProps,mapDispatchToProps)(ImageUploadRaw);

