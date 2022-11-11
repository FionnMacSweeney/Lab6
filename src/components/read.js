import React from "react";
//import books from book.js
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{

    //method to make http request to API
    componentDidMount() {
        //asyncrious call
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({
                books:response.data.myBooks
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        books:[]
            
    }

    render(){
        return(
            <div>
                    <h3>Hello from read component.</h3>
                    {/* import from books.js */}
                    <Books books={this.state.books}></Books>
            </div>
        );
    }

}