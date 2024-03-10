import style from './ContactForm.module.scss';

export default function ContactForm () {
  return (
    <form className={style['form']}>
      <div className={style['form-row']}>
        <label htmlFor='name'>Seu nome:</label>
        <input type='text' id='name' name='name' />
      </div>
      <div className={style['form-row']}>
        <label htmlFor='email'>Seu email:</label>
        <input type='email' id='email' name='email' />
      </div>
      <div className={style['form-row']}>
        <label htmlFor='message'>Sua Mensagem:</label>
        <textarea rows='8' id='message' name='message' />
      </div>
      <div className={`${style['form-row']} ${style['footer-row']}`}>
        <button>Enviar</button>
      </div>
    </form>
  );
}