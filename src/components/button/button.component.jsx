import './button.styles.scss';

const Button = ({text}) =>{
  return(
      <div className='btn-container'>
          <button>
          <span className='btn bouncy' type='submit'>{text}</span>
          </button>
      </div>
  )
};
export default Button;