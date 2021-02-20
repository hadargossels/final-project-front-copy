import React, {Component, createRef} from 'react';
import '../css/articlePage.css';
import ArticleComment from './ArticleComment';

class ArticlePage extends Component {
    constructor(props){
        super(props);
        this.fullNameRef = createRef();
        this.emailRef = createRef();
        this.notesRef = createRef();
        this.state = {
            messageFullName: '',
            messageEmail: '',
            messageNotes: "",
            comments: []
        };
    }

    componentDidMount() {
        let articleComments = JSON.parse(localStorage.getItem('article-comments'));
        if (articleComments){
            if (articleComments[`${this.props.article.id}`]){
                let comments = articleComments[`${this.props.article.id}`]
                this.setState({comments});
            }  
        }
    }

    submitContact = (event) => {
        event.preventDefault();

        const invalidMessages= {required: "This field is required", 
                                emailPattern: "Please provide a valid email",
                                phonePattern: "Please provide a valid phone number"                           
                                };
        const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        let correctInputs = true;

        if (this.fullNameRef.current.validity.valueMissing){
            this.fullNameRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageFullName: invalidMessages.required});
        }
        else{
            this.setState({messageFullName: ''});
            this.fullNameRef.current.style.borderColor = 'green';
        }
        
        if (!this.emailRef.current.value){
            this.emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageEmail: invalidMessages.required});
        } 
        else if (!this.emailRef.current.value.match(emailPattern)){
            this.emailRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageEmail: invalidMessages.emailPattern});
        }
        else {
            this.setState({messageEmail: ''});
            this.emailRef.current.style.borderColor = 'green';
        }

        if (this.notesRef.current.validity.valueMissing){
            this.notesRef.current.style.borderColor = 'red';
            correctInputs = false;
            this.setState({messageNotes: invalidMessages.required});
        }
        else{
            this.setState({messageNotes: ''});
            this.notesRef.current.style.borderColor = 'green';
        }
    
        // console.log(this.notesRef.current)
        if (correctInputs) {
            let newDate = new Date();
            let day = newDate.getDate();
            let mounth = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            newDate= day + '/' + mounth + '/' + year;
            
            let newComment = {name: this.fullNameRef.current.value, date: newDate, comment: this.notesRef.current.value};

            this.setState(prevState => ({
                comments: [...prevState.comments, newComment]
            }))

            let articleComments = JSON.parse(localStorage.getItem('article-comments'));
            if (articleComments){
                if (articleComments[`${this.props.article.id}`]){
                    let comments = articleComments[`${this.props.article.id}`]
                    comments.push(newComment);
                    articleComments[`${this.props.article.id}`] = comments;
                    localStorage.setItem('article-comments', JSON.stringify(articleComments));
                }
                else{
                    articleComments[`${this.props.article.id}`] = newComment;
                    localStorage.setItem('article-comments', JSON.stringify(articleComments));
                }  
            }
            else{
                let articleComments = {};
                let comments = [];
                comments.push(newComment);
                articleComments[`${this.props.article.id}`] = comments;
                localStorage.setItem('article-comments', JSON.stringify(articleComments));
            }

        }
        else {
            
        }
    }

    render() {
        return (
            <div className="articlePage">
                <div className="container text-justify">
                    <h1 className="display-4 mb-5 mt-3">{this.props.article.title}</h1>
                    <img src={this.props.article.img} alt="Image" style={{height:"300px", width:"300px", float: "right", margin: "0 0 10px 30px", border: "1px solid #000000"}}></img>
                    {this.props.article.detail.split('\n').map((item, key) => {return <p key={key}>{item}</p>})}
                </div>

                <div className="container-fluid d-flex justify-content-center" style={{backgroundColor: "#f2f2f2"}}>
                    <div className="container">
                        {/* <div className="d-flex flex-column justify-content-center align-items-center"> */}
                            <h4>Comments</h4>
                            {this.state.comments.map(comment => 
                                <ArticleComment
                                    comment={comment}
                                ></ArticleComment>
                            )}
                            
                        {/* </div>  */}
                    </div>
                </div>

                <div className="container-fluid mt-4 py-5 d-flex justify-content-center" style={{backgroundColor: "#f2f2f2"}}>
                    <div style={{width: "800px"}}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h4>Leave a comment</h4>
                            <form style={{width: "80%"}}>
                                <label htmlFor="fullName">Full name: </label>
                                <input type="text" className="form-control" ref={this.fullNameRef} required></input>
                                <div className="invalidMassege text-danger">
                                    {this.state.messageFullName}
                                </div>

                                <label htmlFor="email">Email: </label>
                                <input type="mail" className="form-control" ref={this.emailRef} required></input>
                                <div className="invalidMassege text-danger">
                                    {this.state.messageEmail}
                                </div>

                                <label htmlFor="notes">Comment: </label>
                                <textarea className="form-control" ref={this.notesRef} rows="3" required></textarea>
                                <div className="invalidMassege text-danger">
                                    {this.state.messageNotes}
                                </div>

                                <div className="d-flex justify-content-center mt-3">
                                <button type="submit" className="btn btn-primary align-middle" onClick={this.submitContact}>Submit</button>
                                </div>
                                
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticlePage;