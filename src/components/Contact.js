// import React from "react";
// import {  MDBIcon, MDBInput } from 'mdbreact';
// import {Link} from 'react-router-dom';

// let filldsArray = [{filld:"name",isFilled:false},
// {filld:"email",isFilled:false},
// {filld:"subject",isFilled:false}]


// function nameValidation(event){
//     console.log(event)
//     let regex=/^[a-zA-Z]+\s[a-zA-Z]+$/;
//     if(regex.test(event.target.value) && event.target.value.length>2)
//     {
//         event.target.setAttribute("class", "form-control is-valid")
//             filldsArray[0].isFilled = true;        
//     }
//     else{
//         event.target.setAttribute("class", "form-control is-invalid")
//             filldsArray[0].isFilled = false;      
//     }   
// }
// function emailValidation(event){
//     let regex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if(regex.test(event.target.value))
//     {
//         filldsArray[1].isFilled = true;
//         event.target.setAttribute("class", "form-control is-valid")
//     }
//     else{
//         filldsArray[1].isFilled = false;
//         event.target.setAttribute("class", "form-control is-invalid")
//     }
// }
// function subjectValidation(event){
//     console.log(event)
//     let regex=/^[a-zA-Z]*$/;
//     if(regex.test(event.target.value) && event.target.value.length>2)
//     {
//         event.target.setAttribute("class", "form-control is-valid")
//             filldsArray[2].isFilled = true;        
//     }
//     else{
//         event.target.setAttribute("class", "form-control is-invalid")
//             filldsArray[2].isFilled = false;      
//     }   
// }
// function btnSend(e){
//     e.preventDefault()
//     if(filldsArray[0].isFilled &&filldsArray[1].isFilled &&filldsArray[2].isFilled ){
//          <Link to='/contact/thankyou'></Link>
//     }
// }
// const FormPage = () => {
// return (
// <div className="container" >
//   <div className="row">
//       <div className="col-3"></div>

//     <div className="col-6 justify-content-center">
//       <form action="" onSubmit={(e)=>{btnSend(e)}}>
//         <p className="h5 text-center mb-4">Write to us</p>
//         <div className="grey-text">
//           <MDBInput  label="Your full name" icon="user" group type="text"
//             onChange={(e)=> {
//                 nameValidation(e);
//                 }}/>
//           <MDBInput label="Your email" icon="envelope" group type="email" 
//             onChange={(e)=> {
//                 emailValidation(e);
//                 }}/>
//           <MDBInput label="Subject" icon="tag" group type="text" 
//           onChange={(e)=> {
//             subjectValidation(e);
//             }}/>
//           <MDBInput type="textarea" maxlength="150" style={{resize: "none"}}  rows="2" label="Your message" icon="pencil-alt" />
//         </div>
//         <div className="text-center">
//           <button className="btn btn-outline-primary" outline color="secondary" 
//           >
//             Send
//             <MDBIcon far icon="paper-plane" className="ml-1" />
//           </button>
//         </div>
//       </form>
//     </div>
//     <div className="col-3"></div>

//   </div>
// </div>
// );
// };

// export default FormPage;



import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {Link} from 'react-router-dom';

let filldsArray = [{filld:"name",isFilled:false},
{filld:"email",isFilled:false},
{filld:"subject",isFilled:false}]


function nameValidation(event){
    console.log(event)
    let regex=/^[a-zA-Z]+\s[a-zA-Z]+$/;
    if(regex.test(event.target.value) && event.target.value.length>2)
    {
        event.target.setAttribute("class", "form-control is-valid")
            filldsArray[0].isFilled = true;        
    }
    else{
        event.target.setAttribute("class", "form-control is-invalid")
            filldsArray[0].isFilled = false;      
    }   
}
function emailValidation(event){
    let regex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(event.target.value))
    {
        filldsArray[1].isFilled = true;
        event.target.setAttribute("class", "form-control is-valid")
    }
    else{
        filldsArray[1].isFilled = false;
        event.target.setAttribute("class", "form-control is-invalid")
    }
}
function subjectValidation(event){
    console.log(event)
    let regex=/^[a-zA-Z]*$/;
    if(regex.test(event.target.value) && event.target.value.length>2)
    {
        event.target.setAttribute("class", "form-control is-valid")
            filldsArray[2].isFilled = true;        
    }
    else{
        event.target.setAttribute("class", "form-control is-invalid")
            filldsArray[2].isFilled = false;      
    }   
}
function btnSend(e){
    e.preventDefault()
    if(filldsArray[0].isFilled &&filldsArray[1].isFilled &&filldsArray[2].isFilled ){
         <Link to='/contact/thankyou'></Link>
    }
}
const ContactPage = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your full name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                  onChange={(e)=> { nameValidation(e) }}/>
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                  onChange={(e)=> { emailValidation(e); }}/>
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                  onChange={(e)=> { subjectValidation(e) }}/>
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  maxLength="150" style={{resize: "none"}}/>
              </div>
              <div className="text-center">
              <button className="btn btn-outline-primary" outline color="secondary" >
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>New York, 94126</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default ContactPage;