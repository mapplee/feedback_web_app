import React from 'react';

function FeedBackForm() {

    const handleSubmitBtn = () =>{
        //Save to database or Something else
        console.log("clicked");
    }
    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: '#c6e2ff' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Give Your Feedback Here</h3>
                                    <div className="form-outline"  id = "title_box" >
                                        <label className="form-label" htmlFor="typeText" id = "titleLabel">Title</label>
                                        <input type="text" id="titleText" className="form-control"/>
                                    </div>
                                    <div className="form-outline" >
                                        <label className="form-label" htmlFor="textAreaExample">Message</label>
                                        <textarea className="form-control" id="textAreaExample" rows="4"></textarea>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block m-3" type="submit" onClick={handleSubmitBtn}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeedBackForm;