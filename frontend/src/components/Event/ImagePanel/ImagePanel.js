import React from "react";

export class ImagePanel extends React.Component {

    constructor() {
        super();
        this.state = {data: false};
    }

    getImages() {

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
            
                console.log(image.blob.toString('utf8'));
                items.push(<img key={image.id} src={image.blob.data.toString('base64')} />);
            })           
            
            return <div>{items}</div>;
                     
        } else {

            return (
                <div>Načítání</div>
            );

        }

    }

}