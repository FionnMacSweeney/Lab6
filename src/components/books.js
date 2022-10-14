import React from "react";
import { BookItems } from "./bookitem";


export class Books extends React.Component{

    render(){
        return this.props.books.map(
            (book)=>{
                //add key to stop infinite loop
                //recieve data from parent
                return <BookItems book={book} key={book.isbn}></BookItems>
            }
        );
        
    }

}