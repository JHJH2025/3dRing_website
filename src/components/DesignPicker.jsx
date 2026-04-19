import state from '../store'
import { RingDesigns } from '../config/constants'
import { useSnapshot } from 'valtio'

const DesignPicker = () =>{
    const snap = useSnapshot(state)

    return(
        <div
            className='flex justify-between gap-2'>
            {Object.entries(RingDesigns).map(
                ([k, design]) =>{
                    const isSelected = snap.metalDesign === k
                    return(
                        <div
                            key = {k}
                            onClick={() => state.metalDesign = k}
                            className={`cursor-pointer max-h-full w-full p-1 rounded-md content-center ${isSelected ? 'outline outline-offset-2' : ''}`}
                        >
                        <img 
                            className='h-full w-full rounded-lg'
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