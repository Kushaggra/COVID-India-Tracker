import Axios from 'axios';
import React from 'react';
import './covid_data.css'

class data extends React.Component{
    constructor(){
        super()
        this.state={
            covid_data:[]
        }
    }

    componentDidMount(){
        Axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
        .then(response =>{
            this.setState({covid_data:response.data})
            console.log(this.state.covid_data)
        })
    }

    render(){
    
      if (!this.state.covid_data.regionData) {
        return null;
      }
  
      return ( <div className="row margin-left: 20px;">
         
          {this.state.covid_data.regionData.map(rdata =><div class="column">
        
                          <div class="flip-box">
                                 <div class="flip-box-inner">
                                 <div class="flip-box-front ">
                                  <h5 className="col-sm-12 my-auto"><b>{rdata.region}</b></h5>
                                    </div>
                                  <div class="flip-box-back">
                                      <h6 style={{fontSize:"small"}}>
                                          <table align="center" className="table table-striped table-hover">
                                              <tr>
                                                  <td>Total Infected </td>
                                                  <td>{rdata.totalInfected}</td>
                                              </tr>
                                              <tr>
                                                  <td>New Infected </td>
                                                  <td>{rdata.newInfected}</td>
                                              </tr>
                                              <tr>
                                                  <td>Recovered </td>
                                                  <td>{rdata.recovered}</td>
                                              </tr>
                                              <tr>
                                                  <td>New Recovered </td>
                                                  <td>{rdata.newRecovered}</td>
                                              </tr>
                                              <tr>
                                                  <td>Deceased </td>
                                                  <td>{rdata.deceased}</td>
                                              </tr>
                                              <tr>
                                                  <td>New Deceased </td>
                                                  <td>{rdata.newDeceased}</td>
                                              </tr>
                                          </table>
                                     </h6>   
                                   </div>
                                 </div>
                            </div>
                            <br/>    </div> 
               )}
        </div>
      );



    }
}

export default data;