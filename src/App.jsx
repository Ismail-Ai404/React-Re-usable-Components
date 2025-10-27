/** @format */
import Badge from "./components/Badge";
function App() {
	return (
		<>
			<Badge>New</Badge>
			<Badge type="square" color="pink">
				Save
			</Badge>
			<Badge type="pill" color="blue">
				Info
			</Badge>
			<Badge type="square" color="green">
				Success
			</Badge>
			<Badge type="pill" color="yellow">
				Success
			</Badge>
		</>
	);
}

export default App;
