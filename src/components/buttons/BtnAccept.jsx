import "../../assets/styles/buttons/btn-confirm.css";

const BtnAccept = (props) => {
    const updateCurrentOrder = () => {
        props.setOrder(props.order);
        props.setToggle(false);
    };

    return (
        <div className='btn-box-confirm'>
            <button className='btn-confirm' onClick={updateCurrentOrder}>Aceptar</button>
        </div>
    );
}

export default BtnAccept;