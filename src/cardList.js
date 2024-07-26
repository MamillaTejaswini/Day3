import CardUI from "./card";
import Navigation from "./Navigation";
function CardList(){
     const name="ReactJs";
    // const description="This is react Js";
    const obj1={name:"Tejaswini",branch:"AIML",studentNo:"64"};
    const usersList=["Name1","Name2","Name3","Name4","Name5","Name6","Name7"]
    return(
        <div style={{display:'flex', flexWrap:'wrap'}}>
                <Navigation />
                {
                usersList.map((userListItem,index)=>(<CardUI key={index} program={name} user={obj1} userFromArray={userListItem} />)
            )
            }
        </div>
    );

}
export default CardList;