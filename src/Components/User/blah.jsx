<div className="content">
<h2>Sign up</h2>
<br />
<form>
    Username: <br />
    <input
        type="text"
        value={this.state.username}
        name="username"
        onChange={this.handleInputChange}
    />{' '}
    <br />
    <br />
    Password: <br />
    <input
        type="password"
        value={this.state.password}
        name="password"
        onChange={this.handleInputChange}
    />{' '}
    <br />
    <br />
    <button className="hoverButton" onClick={(e) => this.handleClick(e)}>
        Sign up
    </button>
</form>
{this.state.message && <div className="info info-danger">{this.state.message}</div>}
</div>

// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// width: 100vw;
// height: 92vh;
// background-position: center;
// background-repeat: no-repeat;
// background-size: cover;
// position: relative;
// background-image: linear-gradient(rgba(164, 164, 240, 0.5), rgba(164, 164, 240, 0.4)),
// 	url("https://images.unsplash.com/photo-1504308805006-0f7a5f1f0f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80");
// .content {
// 	border: .1rem solid #a4a4f0;
// 	padding: 5rem;
// 	background-color: white;
// }