import {Component} from 'react';
import checkimg from './checkimg.png';

export class GroceryList extends Component{
    state={
       userInput:"",
       groceryList:[]     

    }

    onChangeEvent(e){
        this.setState({userInput:e});
    }
    addItem(inputWord){
        if(inputWord ===""){
            alert("Please enter an item!")
        }
        else{

            let ListArray=this.state.groceryList;
            ListArray.push(inputWord)
            this.setState({groceryList:ListArray,userInput:""})
        }
    }
    deleteItem(){
        let ListArray=this.state.groceryList;
        ListArray=[];
        this.setState({groceryList:ListArray})
    }
    crossedWord(event){
        const word=event.target;
        word.classList.toggle('crossed');
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input  type ="text"
                placeholder='What do you want to buy?'
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
            </div>
            <div  className='container'>
                <button onClick ={()=>this.addItem(this.state.userInput)} className="add">Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item,index)=>(
                    <li onClick = {this.crossedWord} key={index}>
                    <img src={checkimg} width="50px" alt='check'/>
                    {item} </li>
                ))}
            </ul>
            <div className='container'>
            <button onClick ={()=>this.deleteItem()} className="delete">Delete</button>
            </div>
            </form>
        </div>
        )
    }
}