import "./Mentors.css";

const Mentors = () => {
	return (
		<section className="experts">
			<div className="container">
				<h2 id="dream-team" className="main-second-heading">
					poznaj nasz dream-team:
				</h2>

				<ul className="experts-list">
					<li className="expert">
						<img
							src="images/AgnesPhoto_640.jpg"
							alt="zdjęcie Agnieszki Dorosz"
						/>
						<div className="expert-info">
							<h3 className="main-third-heading">Agnieszka Dorosz</h3>
							<p className="par-Agnes">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
								ratione eligendi quia pariatur dolore incidunt maiores. Commodi
								fuga illo odit velit explicabo incidunt quas at perferendis
								architecto nemo officiis error debitis doloremque magni sed sunt
								repudiandae assumenda, distinctio aspernatur quia!
							</p>
						</div>
					</li>

					<li className="expert reversed">
						<img src="images/AmeliaPhoto_640.jpg" alt="zdjęcie Amelii Dorosz" />
						<div className="expert-info">
							<h3 className="name-Amelia main-third-heading">Amelia Dorosz</h3>
							<p className="par-Amelia">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
								quo recusandae delectus expedita cupiditate est sunt veritatis
								dignissimos minus soluta velit asperiores. Ex libero inventore,
								dicta laudantium saepe esse doloribus modi aperiam ipsa animi
								deleniti labore nobis numquam quaerat facere!
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Mentors;
