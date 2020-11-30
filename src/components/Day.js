export default function Day(props) {


    return (
        <div>
            <ul className='day-card'>
                <h3>
                    {props.day.name}
                </h3>
                <li>
                    Sunrise:  {props.day.sunrise}
                </li>
                <li>
                Sunset:  {props.day.sunset}
                </li>
                <li>
                Noon:  {props.day.solar_noon}
                </li>
                <li>
                Day Length:  {props.day.day_length}
                </li>
            </ul>
        </div>
    )
}
