import { getHerosByPublisher } from '../helpers/getHerosByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ( {publisher} ) => {
    const heroes = getHerosByPublisher( publisher )
    return (
        <div className='row row-cols-1 row-cols-md-3  g-3'>
        {
            
            heroes.map(hero  => (
                <li className="list-group-item d-flex justify-content-between">
                    <HeroCard key= {hero.id} {...hero} />
                </li>
            ))   
        }
    </div>
    )
}
