import CartBtn from './cartBtn';
function CardUI(props){
    const width=100;
    return(
        <div className="card" style={{width:'200px'}}>
            <img src="/user.jpeg" width={width} class="card-img-top" style={{border:'10px solid #FF000',borderRadius:'50px'}}></img>
            <div className="card-body">
            <p>{props.userFromArray}</p>
            {<CartBtn />}
        </div>
        </div>
    );
}
export default CardUI;