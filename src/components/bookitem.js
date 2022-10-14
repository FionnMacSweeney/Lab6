//import card from bootstrap and import react
import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItems extends React.Component{

    render(){
        return( 
            <div> 
                {/* <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6>       */}

                
                

    {/* add the title pictures and author into a card stylying */}
    <Card>
      <Card.Header>{this.props.book.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <img src={this.props.book.thumbnailUrl}></img>
           
          <footer>
            {this.props.book.authors[0]}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>


        
            </div>

        );
    }

}