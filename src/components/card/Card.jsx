import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import PropTypes from 'prop-types'
const Card = ({cards,handleCardSelect}) => {
    const {image,title,description,price,credit} = cards ;
    // console.log(cards);
    return (
         <div className=" sm:w-full rounded-md shadow-lg border-gray-500 bg-slate-50 p-3">
            <img className="w-full rounded-lg" src={image} alt="photo"></img>
            <h3 className="text-2xl font-semibold my-3">{title}</h3>
            <p><small  className="text-[18px] ">{description}</small></p>
            <div className=" flex justify-around my-4">
                 <p className=" flex justify-center gap-3 items-center"><FiDollarSign className="text-xl"/>Price: {price}</p>
                <p className=" flex justify-center items-center gap-2"><BsBook className="text-xl" />  credit: {credit}hrs</p> 
            </div>
            <button onClick={() => handleCardSelect(cards)} className="w-full bg-[#2F80ED] text-white px-5 py-2 text-xl rounded-md hover:bg-[#1361c7] hover:transition-all focus:bg-[#1361c7] ">Select</button>
        </div>
    );
};

Card.propTypes ={
    cards:PropTypes.object.isRequired,
    handleCardSelect: PropTypes.func.isRequired,

}
export default Card;