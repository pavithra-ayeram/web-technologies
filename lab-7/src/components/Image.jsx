function Image({ src, alt, width = 100 }) {
  const style = {
    width: `${width}px`,
    height: `${width}px`,
    borderRadius: "50%",
    objectFit: "cover", 
    border: "2px solid #ccc", 
  };

  return <img src={src} alt={alt} style={style} />;
}

export default Image;
