import { states } from '../../../../data/states.jsx'
import { useLocation } from "../../../contexts/FilterContext"

export default function StateDropdown(){

    const { selectState } = useLocation()

    function selected(e){
        e.preventDefault()
        selectState(e.target.value)
        console.log('state-dropdown', e.value)
    }

    const statesDropdown = () => {
        // console.log(states)
        return states.map((state) => {
            return <option value={state.Abbreviation}>{state.State}</option>
        })
    }

    return(
        <form>
            <label>
                State:
                <select onChange={selected} required>
                    {statesDropdown()}
                </select>
            </label>
        </form>
    )
}