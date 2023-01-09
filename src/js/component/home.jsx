import React, {useState} from "react";

const Home = () => {
	const [color1,setColor1]= useState("");
	const [sombra1,setSombra1] = useState("");
	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
			
		}else{
			setColor2("")
			setColor3("")
		setColor1("btn-danger")
		setSombra1("0 0 15px 10px red");
	}}
	const [color2,setColor2]= useState("");
	
	function encenderAmarillo() {
		if(color2 === "btn-warning"){
		setColor2("")
		}else{
		setColor3("")
		setColor1("")
		setColor2("btn-warning")
		
	}};
	const [color3,setColor3]= useState("");
	const [sombra2,setSombra2] = useState("");
	function encenderVerde() {
		if(color3 === "btn-success"){
		setColor3("")
		}else{
			setColor2("")
			setColor1("")
		setColor3("btn-success")
		setSombra1
		setSombra2
	}};
return (

	<div id="semaforo" className="d-flex flex-column mx-auto ">
		<button className={"btn  "+color1} id="Rojo" style={{boxShadow: sombra1}} onClick={encenderRojo}></button>
		<button className={"btn "+color2} id="Amarillo" onClick={encenderAmarillo}></button>
		<button className={"btn "+color3} id= "Verde"onClick={encenderVerde}></button>
	</div>
	
);
};


export default Home;
