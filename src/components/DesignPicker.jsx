import state from '../store'
import { RingDesigns } from '../config/constants'
import { useSnapshot } from 'valtio'

const DesignPicker = () =>{
    const snap = useSnapshot(state)

    return(
        <div>
            {Object.entries(RingDesigns).map(
                ([k, design]) =>{
                    const isSelected = snap.metalDesign === k
                    return(
                        <div
                            key = {k}
                            onClick={() => state.metalDesign = k}
                            className={`cursor-pointer h-24 w-1/3 ${isSelected ? 'outline outline-offset-2' : ''}`}
                        >
                        <img 
                            className=''
                            src = {design.pic}
                        />
                        </div>
                    )
                    
                }
            ) }
        </div>
    )

}
export default DesignPicker