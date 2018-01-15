import React from "react";

export class ImagePanel extends React.Component {
  constructor() {
    super();
    this.state = { data: false };
  }

  componentDidMount() {
    const { images } = this.props;

    images.then(result => {
      this.setState({ data: result.data.images });
    });
  }

  render() {
    if (this.state.data) {
      var items = [];

      this.state.data.map(image => {
        const result = (
          <img
            key={image.id}
            width="100" alt="Obrázek oběda"
            src={"data:" + image.mimeType + ";base64," + Buffer.from(image.blob).toString("utf8")}
          />
        );
        items.push(result);
        return result;
      });

      return <div>{items}</div>;
    } else {
      return <div>Načítání</div>;
    }
  }
}
