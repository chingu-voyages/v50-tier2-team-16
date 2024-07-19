import { states } from '../../../../states.jsx'

export default function State(){

    const statesDropdown = () => {
        console.log(states)
        states.map(state => {
            <option value={state.Abbreviation}>{state.State}</option>
        })
    }

    return(
        <form>
            <label>
                State:
                <select>
                    {statesDropdown}
                </select>
            </label>
        </form>
    )
}