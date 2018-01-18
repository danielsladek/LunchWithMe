import React from "react";

export class ImagePanel extends React.Component {

    constructor() {
        super();
        this.state = {data: false};
    }

    componentDidMount() {
        const { images } = this.props;

        images.then(result => {
            this.setState({ data: result.data.images });
        });
    }


    render () {

        if(this.state.data) {

            var items = [];

            this.state.data.map(image => {
                items.push(<img key={image.id} width="45%" src={'data:'+image.mimeType+';base64,'+Buffer.from(image.blob).toString('utf8')} />);
            })

            return <div>
              {items.length < 1 &&
                <div>No images uploaded yet.</div>
              }
                    {items}
                  </div>;

        } else {

            return (
                <div>Loading images...</div>
            );

        }

    }

}
