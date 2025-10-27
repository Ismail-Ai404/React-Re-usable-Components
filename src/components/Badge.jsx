/** @format */
import "./Badge.css";
export default function Badge({ children, type = "square", color = "red" }) {
	return <div className={`badge ${type} ${color}`}>{children}</div>;
}
