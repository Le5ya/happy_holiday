import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation.jsx';
import ImageCard from './ImageCard/ImageCard.jsx';



const Card = () => (
	<div className={style.card}>
		<div className={style.wrapper}>
			<div className={style.image}>
				<ImageCard />
				<Felicitation />
				
			</div>
		</div>
	</div>
);
export default Card;