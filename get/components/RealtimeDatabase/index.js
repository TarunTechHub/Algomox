import StartFirebase from '../firebaseConfig/index'
import React from 'react'
import {ref, onValue, child} from 'firebase/database'
import {Table} from 'react-bootstrap';
import * as icons from 'react-bootstrap-icons';

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef= ref(db, "contactForm");

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data": data})
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return(
            <Table className='container w-75' bordered striped variant='primary'>
                <thead>
                    <tr>
                        <th>SI No</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Income</th>
                        <th>IP Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

               <tbody>
               {this.state.tableData.map((row,index)=>{
                return(
                <tr>
                    <td>{index+1}</td>
                    <td>{row.data.name}</td>
                    <td>{row.data.date}</td>
                    <td>{row.data.emailid}</td> 
                    <td>{row.data.income}</td> 
                    <td>{row.data.ipaddress}</td> 
                    <td><button><icons.Trash color="royalblue"/></button></td> 
                </tr>
                )
               })}
               </tbody>
            </Table>
            
        )
    }
}

