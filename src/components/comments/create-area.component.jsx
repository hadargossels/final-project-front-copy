import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // const [counter, setCounter] = useState(1);

  // validation

  const [validName, setValidName] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);

  // validation

  const patterns = {
    title: /(^.{2,})+$/i,
    content: /(^.{5,})+$/i,
  };

  function handleChange(event) {
    const { name, value } = event.target;
    validate(value, patterns[name], name);

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // validation

  function validate(value, regex, typeOfInput) {
    let validationState = regex.test(value);

    console.log(validationState);

    switch (typeOfInput) {
      case "title":
        validationState ? setValidName(true) : setValidName(false);
        break;

      case "content":
        validationState ? setValidMessage(true) : setValidMessage(false);
        break;

      default:
        break;
    }
  }

  const submitNote = (event) => {
    event.preventDefault();

    checkingIfFormValid();

    // let date = new Date().toLocaleString();
    // props.onAdd(note, date);
    // setNote({
    //   title: "",
    //   content: "",
    // });
    // setCounter(counter + 1);
  };

  // validate

  function checkingIfFormValid() {
    if (validName && validMessage) {
      // setCounter(counter + 1);

      setValidForm(true);

      let date = new Date();
      props.onAdd(note, date);
      setNote({
        title: "",
        content: "",
      });
      setTimeout(() => {
        setValidForm(false);
      }, 3000);
    } else {
      setInvalidForm(true);

      setTimeout(() => {
        setInvalidForm(false);
      }, 3000);
    }
  }

  return (
    <div>
      <form>
        <h3 className="pull-left">New Comment</h3>
        <fieldset>
          <div className="row">
            <div className="col-sm-3 col-lg-2 hidden-xs">
              <img
                className="img-responsive user-img"
                src={`https://robohash.org/${props.count + 1}?set=set2`}
                alt
              />
            </div>
            <div className="form-group col-xs-12 col-sm-9 col-lg-10">
              <input
                onChange={handleChange}
                className="form-control"
                name="title"
                id="title"
                placeholder="Your name"
                value={note.title}
                required
                defaultValue={""}
              ></input>
              {/* ///cheackicng ////// */}

              {validName ? (
                <p className="valid" style={{ color: "green" }}>
                  valid
                </p>
              ) : (
                <p className="invalid" style={{ color: "red" }}>
                  Please enter a valid Name.
                </p>
              )}

              {/* ///Endcheackicng ////// */}

              <textarea
                onChange={handleChange}
                name="content"
                className="form-control"
                id="content"
                placeholder="Your message"
                value={note.content}
                required
                defaultValue={""}
              />
              {/* ///cheackicng ////// */}

              {validMessage ? (
                <p className="valid" style={{ color: "green" }}>
                  valid
                </p>
              ) : (
                <p className="invalid" style={{ color: "red" }}>
                  Please enter a valid Name.
                </p>
              )}

              {/* ///Endcheackicng ////// */}
            </div>{" "}
          </div>{" "}
          <button onClick={submitNote} className="btn btn-dark pull-right">
            Submit
          </button>{" "}
          {validForm && (
            <p className="valid" style={{ color: "green" }}>
              {" "}
              Thank you for contact us, we will back to you soon.
            </p>
          )}
          {invalidForm && (
            <p className="invalid" style={{ color: "red" }}>
              {" "}
              Please enter correctly all the required fields.
            </p>
          )}
        </fieldset>{" "}
        {/* ///cheackicng ////// */}
        {/* ///Endcheackicng ////// */}
      </form>
    </div>
  );
}

export default CreateArea;

// <form>
//   <h3 className="pull-left">New Comment</h3>

//   <fieldset>
//     <div className="row">
//       <div className="col-sm-3 col-lg-2 hidden-xs">
//         <img
//           className="img-responsive user-img"
//           src="https://robohash.org/1?set=set2"
//           alt
//         />
//       </div>
//       <div className="form-group col-xs-12 col-sm-9 col-lg-10">
//         <input
//           onChange={handleChange}
//           className="form-control"
//           id="name"
//           placeholder="Your name"
//           required
//           defaultValue={""}
//         ></input>
//         <textarea
//           onChange={handleChange}
//           className="form-control"
//           id="message"
//           placeholder="Your message"
//           required
//           defaultValue={""}
//         />
//       </div>{" "}
//     </div>{" "}
//     <button onClick={handleClick} className="btn btn-dark pull-right">
//       Submit
//     </button>
//   </fieldset>
// </form>;
