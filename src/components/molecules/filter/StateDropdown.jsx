import { states } from '../../../../data/states.jsx'
import { useLocation } from "../../../contexts/FilterContext"

export default function StateDropdown(){

    const { selectState, state } = useLocation()

    function selected(e){
      
        selectState(e.target.value)
        console.log('state-dropdown', e.value)
    }

    const statesDropdown = () => {
        // console.log(states)
        return states.map((state, index) => {
            return <option key={index} value={state.Abbreviation}>{state.State}</option>
        })
    }

    return(
        <form>
            <label>
                State:
                <select onChange={selected} defaultValue={state} required>
                    {statesDropdown()}
                </select>
            </label>
        </form>
    )
}