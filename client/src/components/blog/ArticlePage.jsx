import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import ArticleComment from './ArticleComment';
import '../../css/articlePage.css';


export default function ArticlePage(props) {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const notesRef = useRef();
    const [messageFullName, setMessageFullName] = useState();
    const [messageEmail, setMessageEmail] = useState();
    const [messageNotes, setMessageNotes] = useState();
    const [comments, setComments] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/articles_comments')
            const comments = response.data.filter(element => element.articleId === props.article.id);
            setComments(comments);
        };
        
        fetchData();
    })

    function createArticleBody(){
        let articleBody = []
        let paragraphs = props.article.detail.split('\n');
        let imgURL = props.article.img;

        for(let i = 0; i < paragraphs.length; i++) {
            if(i === Math.floor(paragraphs.length / 2)){
                articleBody.push(<div className="text-center my-5" key='image'><img src={imgURL} alt="articleBody"></img></div>)
            }
            articleBody.push(<p key={i}>{paragraphs[i]}</p>);
        }
        
        return articleBody;
    }

    const submitContact = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                emailPattern: "Please provide a valid email",
                                phonePattern: "Please provide a valid phone number"                           
                                };
        const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        let correctInputs = true;

        if (fullNameRef.current.validity.valueMissing){
            fullNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageFullName(invalidMessages.required);
        }
        else{
            setMessageFullName('');
            fullNameRef.current.style.borderColor = 'green';
        }
        
        if (!emailRef.current.value){
            emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageEmail(invalidMessages.required);
        } 
        else if (!emailRef.current.value.match(emailPattern)){
            emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageEmail(invalidMessages.emailPattern);
        }
        else {
            setMessageEmail('');
            emailRef.current.style.borderColor = 'green';
        }

        if (notesRef.current.validity.valueMissing){
            notesRef.current.style.borderColor = 'red';
            correctInputs = false;
            setMessageNotes(invalidMessages.required);
        }
        else{
            setMessageNotes('');
            notesRef.current.style.borderColor = 'green';
        }
    
        if (correctInputs) {
            let newDate = new Date();
            let day = newDate.getDate();
            let mounth = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            newDate= day + '/' + mounth + '/' + year;
            
            let newComment = {name: fullNameRef.current.value, date: newDate, comment: notesRef.current.value};

            setComments(prevComments => (
                [...prevComments, newComment]
                ), () => {
                    axios.post(`http://localhost:5000/articles_comments`, { ...newComment, articleId: props.article.id })
                        .catch(err => {
                            console.log(err);
                        })
                    }
            )
        }
    }

    return (
        <div className="articlePage">
            <div className="container text-justify">
                <h1 className="display-4 mb-5 mt-3">{props.article.title}</h1>
                {createArticleBody()}
            </div>

            <div className="container-fluid d-flex justify-content-center" style={{backgroundColor: "#f2f2f2"}}>
                <div className="container">
                        <h4 className="text-center">Comments</h4>
                        {comments ?
                            comments.map((comment, index) => 
                                <ArticleComment
                                    comment={comment}
                                    key={index}
                                ></ArticleComment>
                            )
                        : null
                        }
                </div>
            </div>

            <div className="container-fluid mt-4 py-5 d-flex justify-content-center" style={{backgroundColor: "#f2f2f2"}}>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{width: "800px"}}>
                    <h4>Leave a comment</h4>
                    <form style={{width: "80%"}}>
                        <label htmlFor="fullName">Full name: </label>
                        <input type="text" className="form-control" ref={fullNameRef} required></input>
                        <div className="invalidMassege text-danger">
                            {messageFullName}
                        </div>

                        <label htmlFor="email">Email: </label>
                        <input type="mail" className="form-control" ref={emailRef} required></input>
                        <div className="invalidMassege text-danger">
                            {messageEmail}
                        </div>

                        <label htmlFor="notes">Comment: </label>
                        <textarea className="form-control" ref={notesRef} rows="3" required></textarea>
                        <div className="invalidMassege text-danger">
                            {messageNotes}
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary align-middle" onClick={submitContact}>Submit</button>
                        </div>
                    </form>
                </div> 
            </div>

        </div>
    );
}
