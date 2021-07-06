import React from 'react';
import "./index.less";

class Test extends React.Component {
	render() {
		return (
			<div className="red">
				<h5>Hello hk</h5>
				{/* {console.log(this.props.children, 'this.props.children')} */}
			</div>
		)
	}
}

export default class Login extends React.Component {
	render() {
		return (
			<div className="page">
				<Test>
					<ul>
						<li>111</li>
						<li>222</li>
						<li>333</li>
						{/* {
							React.Children.map(this.props.children, function (value, key) {
								return <li>{value}----{key}</li>;
							})
						} */}
					</ul>
				</Test>
				{/* <h1>Login 登陆页面</h1>
				<h1><a href="#/">门户</a></h1> */}
			</div>
		)
	}
}
