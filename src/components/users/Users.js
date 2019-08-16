import React, { Component } from 'react';
import UserItem from './UserItem';
// import Firebase from '../firebase/Firebase';
import { app } from '../../constants';
import  uuidv1  from 'uuid';
class Users extends Component {
    state = {
        nameField: "",
        ageField: "",
        data: [],
        users: [
            {
                id: '1',
                username: 'Sabrina',
                html_url: 'https://jsonplaceholder.typicode.com/users'
            },
            {
                id: '2',
                username: 'Savannah',
                html_url: 'https://jsonplaceholder.typicode.com/users'
            },
            {
                id: '3',
                username: 'Rosie',
                html_url: 'https://jsonplaceholder.typicode.com/users'
            }
        ]
    };
    
    writeData = (e) => {
        app.database().ref(`User/${uuidv1()}`).set({
            name: this.state.nameField,
            age: this.state.ageField
        });
        alert("success");
        
        console.log(this.state.nameField);
        console.log(this.state.ageField);
        
        this.setState({nameField: ""});
        this.setState({ageField: ""});
    }

    getData = (e) => {
        this.setState({data: ""});

        const arrayTemp = []
        app.database().ref('/').once('value', (snapshot) =>{
            snapshot.forEach( (childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                {Object.keys(childData).map(function(key) {
                    const data = childData[key];
                    const newData = "name: "+data['name'] + ' age: ' + data['age'] + "\n";
                    arrayTemp.push(newData)
                })}
            });
            this.setState({data: arrayTemp})
        })
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        let datas = "";
        const {data} = this.state;
        console.log(data);
        return(
            <div>
            <div style={userStyle}>
                
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>

            <div>
                <form id="fields">
                    <input type="text" 
                        placeholder="name" 
                        name="nameField" 
                        value={this.state.nameField} 
                        onChange={e => this.onChange(e)}>
                    </input>

                        <br></br>
                        
                    <input type="text" 
                        placeholder="age" 
                        name="ageField" 
                        value={this.state.ageField} 
                        onChange={e => this.onChange(e)}>
                    </input>
                </form>
            </div>
            
            <button onClick={this.writeData}>Save Data</button>
            <button onClick={this.getData}>Dislay Data</button>
            {
                (data <= 0) ?
                "loading..." :
                data.map((user, index) => (
                <p id="data" key={index}>{user}</p>
                ))
            }
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}
export default Users