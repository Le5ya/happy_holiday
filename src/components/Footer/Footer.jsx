import Container from "../Container/Container";
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";
import { ReactComponent as PTIcon } from "../../img/pinterest.svg";
import { ReactComponent as SBPIcon } from "../../img/stumbleupon.svg";


const Footer = () => (
	<footer className={style.footer}>
		<Container>
			<div className={style.wrapper}>
				<div className={style.contacts}>
					<p>Design: <a href="https://t.me/Marshmalloww">Anastasia Ilina</a></p>
					<p>Сoder: <a href="https://vk.com/leya7864">LiliaTolstykh</a></p>
					<p>С© HBCard, 2022 </p>
				</div>

				<ul className={style.social}>
					<li className={style.item}>
						<a href="https://vk.com/methed" className={style.link}>
							<VKIcon/>
						</a>
					</li>
					<li className={style.item}>
						<a href="https://t.me/methed_chat_front" className={style.link}>
						<TGIcon/>
							
							
						</a>
					</li>
					<li className={style.item}>
						<a href="https://pinterest.com" className={style.link}>
						<PTIcon />
						</a>
					</li>
					<li className={style.item}>
						<a href="https://sumbleupon.com" className={style.link}>
							<SBPIcon/>
						</a>
					</li>
				</ul>
			</div>
			
		</Container>
	</footer>
);
export default Footer;