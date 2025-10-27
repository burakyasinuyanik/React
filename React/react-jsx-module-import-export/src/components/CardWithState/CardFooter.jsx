export default function CardFooter(props){
return(<>
  <h2>
  card footer ({props.like})
  </h2>
  <button onClick={props.handleClick}>footer like</button>

  </>
)
}