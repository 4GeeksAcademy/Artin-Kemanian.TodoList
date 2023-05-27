import React, { useState } from "react";

// create your first component
const Home = () => {
	const [input1, setInput1] = useState("")
	const [listelements, setListelements] = useState([])
	return (
		<>
		<div className="container container-fluid ">
			<div className="header">
				<h1 className="display-2 text-center">todos</h1>
			</div>
			<div className="d-flex justify-content-center">
				<div className="card col-4">
					<ul className="list-group list-group-flush">
						<li className="list-group-item"><input className="border-0 w-100" type="text" onChange={(e) => setInput1(e.target.value)} value={input1} onKeyDown={(e) => {if (e.key === "Enter" && input1 != "") {
						setListelements(listelements.concat(input1)); setInput1("")}
						}} />
						{listelements.map((item, index) => 
							<li className="list-group-item">
								<div className="row">
									<div className="col-9">{item}</div>
									<div className="col-3 d-flex justify-content-end"><a class="link-primary" onClick={() => setListelements(listelements.filter((t, currentIndex) => index != currentIndex))}>Borrar</a></div>
								</div>
							</li> )}
						</li>
					</ul>
					<div className="card-footer">
						<p className="numberOfTasks">{listelements.length} tareas</p>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
