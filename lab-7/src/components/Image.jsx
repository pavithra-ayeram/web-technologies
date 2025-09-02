function Image({ src, alt, width = 100 }) {
  return <img src={src} alt={alt} width={width} />;
}

export default Image;
