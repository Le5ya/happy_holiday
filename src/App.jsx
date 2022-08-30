import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};
//!todo временный объект
const style = {};
const App = () => {
  return (
    <div style={wrapper}>
      <Header />
      
      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img className={style.img} src="" alt></img>
            <p className={style.felicitation}>
              Поздравляю с днем рожденья!<br/>
              Пусть будет жизнь полна веселья,<br/>
              Не будет грусти и хлопот,<br/>
              А только счастье круглый год!<br/>
<br/>
              Желаю творческих успехов,<br/>
              Прекрасных дней, улыбок, смеха.<br/>
              Любви, душевного тепла,<br/>
              Как сказка, чтобы жизнь была!<br/>

            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
