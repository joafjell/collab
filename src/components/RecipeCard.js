<<<<<<< HEAD
import {ClockIcon} from '@heroicons/react/24/outline'

export default function RecipeCard({title, ingress, image, totalTime}){
    
    return(
        <article className="recipe-card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p><ClockIcon className="clockIcon"/>Estimert tid: <span>{totalTime}</span> minutes</p>
            <p>{ingress}</p>
=======
import { Link } from "react-router-dom";

export default function RecipeCard({title, img, time, slug}){
    return(
        <article className="recipe-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>Estimert tid: <span>{time}</span></p>
            <Link to={slug} className="link"></Link>
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
        </article>
    )
}