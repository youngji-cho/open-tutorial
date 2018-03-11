import React from 'react';
import update from 'react-addons-update';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';

export default class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedKey:-1,
      keyword:"",
      contactData:[{
        name:'Lisa',
        phone:'010-1380-9292'
      },{
        name:'Nayoung',
        phone:'010-4343-4342'
      },{
        name:'Yerang',
        phone:'010-4444-4343'
      },{
        name:'Nara',
        phone:'010-7336-5961'
      }]
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);

    this.handleCreate=this.handleCreate.bind(this);
    this.handleRemove=this.handleRemove.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
  }
  handleChange(e){
    this.setState({
      keyword:e.target.value
    })
  };

  handleClick(key){
    this.setState({
      selectedKey:key
    });
  }

  handleCreate(contact){
    this.setState({
      contactData:update(this.state.contactData,{$push:[contact]})
    })
  }
  handleRemove(){
    this.setState({
      contactData:update(this.state.contactData,
                { $splice: [[this.state.selectedKey, 1]] }
            ),
      selectedKey:-1
    });
  }

  handleEdit(){
    this.setState({
      contactData:update(this.state.contactData,{
        [this.state.selectedKey]:{
          name : {$set: name},
          phone: {$set:phone}
        }
      })
    });
  }

  /**/
  render(){
    const mapToComponents =(data)=>{
      data.sort((a,b)=>{return a.name>b.name});
      data=data.filter(
        (contact)=>{
          return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );
      return data.map((contact,i)=>{
        return (<ContactInfo contact={contact} key={i} onClick={() => {this.handleClick(i)}} />)
      })
    }

    return (
      <div>
       <h1>Contacts</h1>
       <input name="keyword" placeholder="search" value={this.state.keyword} onChange={this.handleChange} />
       <div>{mapToComponents(this.state.contactData)}</div>
       <ContactDetails contact={this.state.contactData[this.state.selectedKey]} isSelected={this.state.selectedKey!=-1}/>
       <ContactCreate />
      </div>
    )
  };
}
