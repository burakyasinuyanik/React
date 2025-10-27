import CardWithState from "./components/CardWithState/";
import Counter from "./components/Counter";
import CreateMultipleImages from "./components/CreateMultipleImages";
import ImgThumbnail from "./components/ImgThumbnail";

export default function AppWithState()
{
  
  return (
  <>
  <Counter/>
  <hr />
  <CreateMultipleImages/>
  <hr />
  <CardWithState/>
  </>
  )
}