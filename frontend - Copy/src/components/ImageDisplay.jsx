const ImageDisplay = ({ imageUrl }) => {
    return (
      imageUrl && (
        <div className="image-container">
          <img src={imageUrl} alt="Generated Recipe" />
        </div>
      )
    );
  };
  
  export default ImageDisplay;
  