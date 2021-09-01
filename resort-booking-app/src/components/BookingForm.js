import React from "react";
import { withRouter , useHistory} from "react-router";
import BookingConfirmationPage from "./BookingConfirmationPage";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            email: "",
            showComponent: false,
            number: "",
            nopeople: "1",
            chIn: "",
            chOut: "",
            gender: "",
            mop: "Pay at checkIn",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    };
    handleChangeNumber = (event) => {
        this.setState({ number: event.target.value });
    };
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    };
    handleChangeGender = (event) => {
        this.setState({ gender: event.target.value });
    };
    handleChangeNoOfPeople = (event) => {
        this.setState({ nopeople: event.target.value });
    };
    handleChangeCheckIn = (event) => {
        this.setState({ chIn: event.target.value });
    };
    handleChangeCheckOut = (event) => {
        this.setState({ chOut: event.target.value });
    };
    handleChangeMop = (event) => {
        this.setState({ mop: event.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);

        const res = await fetch("BookingForm", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },

            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                number: this.state.number,
                nopeople: this.state.nopeople,
                mop: this.state.mop,
                gender: this.state.gender,
                chIn: this.state.chIn,
                chOut: this.state.chOut,
            }),
        });
        this.props.history.push({pathname: '/BookingConfirmationPage/', state:{name: this.state.name,email: this.state.email,
            number: this.state.number,
            nopeople: this.state.nopeople,
            mop: this.state.mop,
            gender: this.state.gender,
            chIn: this.state.chIn,
            chOut: this.state.chOut,}});
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container ">
                <div className="field">
                    <label for="name">Name: </label>
                    <div className="control">
                        <input
                            type="text"
                            id="name"
                            onChange={this.handleChangeName}
                            className="form-control"
                        ></input>
                    </div>
                </div>
                <label for="number">Number: </label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    onChange={this.handleChangeNumber}
                    className="form-control"
                ></input>
                <br></br>
                <label for="email">Email Id: </label>
                <input
                    type="text"
                    id="email"
                    onChange={this.handleChangeEmail}
                    className="form-control"
                ></input>
                <br></br>
                <label for="gender">Gender: </label>
                <input
                    type="text"
                    id="gender"
                    onChange={this.handleChangeGender}
                    className="form-control"
                ></input>
                <br></br>
                <label for="nopeople">
                    Number of people:
                    <select
                        name="nopeople"
                        id="nopeople"
                        className="form-control"
                        onChange={this.handleChangeNoOfPeople}
                    >
                        <option option="1">1</option>
                        <option option="2">2</option>
                        <option option="3">3</option>
                        <option option="4">4</option>
                    </select>
                </label>
                <br></br>
                <label for="chIn">Check In:</label>
                <br></br>
                <input
                    type="date"
                    id="chIn"
                    onChange={this.handleChangeCheckIn}
                ></input>
                <br></br>
                <label for="chOut">Check Out:</label>
                <br></br>
                <input
                    type="date"
                    id="chOut"
                    onChange={this.handleChangeCheckOut}
                ></input>
                <br></br>
                <label for="payment">
                    Mode of payment:
                    <select
                        name="mop"
                        id="mop"
                        onChange={this.handleChangeMop}
                        className="form-control"
                    >
                        <option option="poh">Pay at checkIn</option>
                        <option option="card">Card</option>
                    </select>
                </label>
                <br></br>
                <button className="btn btn-dark" onClick={this.handleSubmit}>
                    Confirm
                </button>
            </form>
        );
    }
}

export default withRouter(BookingForm);
// export default BookingForm;