import ImgThumbnail from "./ImgThumbnail"

export default function Card({title,imgSrc,imgAlt}){
  const cardStyle={
    padding:"10px",
    border:"1px solid #bdc3c7",
    boxSizing:"border-box",
    marginBottom:"5px",
    borderRadius:"8px"
  }

  return(
    <div style={cardStyle}>
      <ImgThumbnail imgSrc={imgSrc} imgAlt={imgAlt}/>
      <h2>{title}</h2>
      <p>Lorem, ipsum dolor.</p>
      <p>Incidunt, id neque.</p>
      <p>Facere, consequuntur harum?</p>
    </div>
  )
}