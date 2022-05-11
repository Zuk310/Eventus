import './input.styles.scss';


const Input = ({ label, ...otherProps }) => {

    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {label && (
                <label className={
                    `${otherProps.value.length ? 'shrink' : 'null'} 
                    form-input-label`}>{label}</label>)}
        </div>
    )
}

export default Input;