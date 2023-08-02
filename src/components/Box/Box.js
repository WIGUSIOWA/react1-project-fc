const Box = ({ title, isNew }) => {
	return (
		<div>
			{isNew && <span className="circle"></span>}
			<p>{title}</p>
		</div>
	);
};
export default Box;
