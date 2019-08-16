import React, { Component } from 'react';


class Firebase extends Component{

//   async componentDidMount(){
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     console.log(res.data);
//   }

  writeData = () => {
      firebase.database().ref("User").set({
          name: document.getElementById("nameField").val,
          age: document.getElementById("ageField").val
      });
      console.log("Success");
  }

  render(){
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default Firebase
