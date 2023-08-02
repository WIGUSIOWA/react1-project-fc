const Box = ({ title, isNew }) => {
	return (
		<div className="box">
			{isNew && <div className="red-dot"></div>}
			<p>{title}</p>
		</div>
	);
};
export default Box;
