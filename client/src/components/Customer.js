import React, {Component} from 'react';
import './customer.css';

class Customer extends Component {
    constructor(){
        super();
        this.state = {
            customer: []
        }
    }

    componentDidMount(){
        fetch('/api/')
            .then(res => {
                return res.json();
            }).then(customer => {
                this.setStatus({customer});
            })
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.customer.map((customer)=>{
                        return <li id={customer.id}>{customer.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Customer;
