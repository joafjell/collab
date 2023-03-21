import { useParams } from "react-router-dom"
<<<<<<< HEAD
import {ClockIcon} from '@heroicons/react/24/outline'

export default function RecipePage({recipes}){
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec?.recipe?.label.replace(/\s/g, "-").toLowerCase() === slug)

    return (
        <section>
            <h1>{recipe?.recipe?.label}</h1>
            <img src={recipe?.recipe?.image} alt={recipe?.recipe?.label} />
            <p><ClockIcon className="clockIcon"/>{recipe?.recipe?.totalTime} minutes</p>
            <ul>
                {recipe?.recipe?.ingredients.map((ing, index) => 
                <li key={index}>{ing.text} vekt:{ing.weight}</li>)}
=======
export default function RecipePage({recipes}){
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec?.recipe?.label.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(recipe?.recipe?.totalTime)
    

    return (
        <section>
            <h1>{recipe?.recipe.label}</h1>
            <img src={recipe?.recipe?.image} alt={recipe?.recipe.label} />

            <ul>
                {recipe?.recipe?.ingredients.map((ing, index) => (
                    <li key={index}>{ing.text} vekt: {ing.weight}</li>
                ))}
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
            </ul>
        </section>
    )
}