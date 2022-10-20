import React, {Component} from 'react';
const Product = props => {
  const plus = () => {
    
    props.onVote('+',props.index);
  };
  const minus = () => {
    
    props.onVote('-',props.index);
  };
  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};
class GroceryApp extends Component {

   
  constructor(props){
  super(props);
  this.state = {
          products: this.props.products
  }
  }

 onVote = (dir, index) => {
   const updatedProducts = [...this.state.products];
   if(dir==='+'){   
   updatedProducts[index].votes = updatedProducts[index].votes+1;
     this.setState({
       products: updatedProducts
     })
   }
   else {
     updatedProducts[index].votes = updatedProducts[index].votes-1;
       this.setState({
        products: updatedProducts
       })
   }
 };

 render() {

   return (
     <ul>
       {
         this.state.products.map((item,ind)=>{
           return <Product key={item.name} index={ind} onVote = {this.onVote} name={item.name} votes={item.votes}></Product>;
         })
       }
     </ul>
   );
 }
}



export default GroceryApp;