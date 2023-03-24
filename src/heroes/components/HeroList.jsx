import { getHerosByPublisher } from '../helpers/getHerosByPublisher'

export const HeroList = ( {publisher} ) => {
    const heroes = getHerosByPublisher( publisher )
    return (
        <ul>
        {
            
            heroes.map(({ superhero, id }) => (
                <li key={ id} className="list-group-item d-flex justify-content-between">
                    {superhero}
                </li>
            ))   
        }
    </ul>
    )
}
