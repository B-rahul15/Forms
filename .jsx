// app.js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
            <h2 className="mt-4 mb-4">React Form Example</h2>
            <form id="myForm" action="submit.php" method="post" enctype="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="gmail">Gmail:</label>
                    <input type="email" className="form-control" id="gmail" name="gmail" required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select className="form-control" id="gender" name="gender" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact:</label>
                    <input type="tel" className="form-control" id="contact" name="contact" required />
                </div>
                <div className="form-group">
                    <label htmlFor="degree">Degree:</label>
                    <input type="text" className="form-control" id="degree" name="degree" />
                </div>
                <div className="form-group">
                    <label htmlFor="engineering">Engineering:</label>
                    <input type="text" className="form-control" id="engineering" name="engineering" />
                </div>
                <div className="form-group">
                    <label htmlFor="hobbies">Hobbies:</label>
                    <textarea className="form-control" id="hobbies" name="hobbies"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea className="form-control" id="address" name="address"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Resume:</label>
                    <input type="file" className="form-control-file" id="resume" name="resume" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
