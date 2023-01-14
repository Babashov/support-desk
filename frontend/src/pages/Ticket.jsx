import { useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import { useParams } from "react-router-dom"
import { getTicket,reset } from "../features/tickets/ticketSlice"
import Spinner from "../components/Spinner"
import { BackButton } from "../components/BackButton"


function Ticket() {
    const {tickets,isLoading,isSuccess} = useSelector((state)=>state.tickets)

    const dispatch = useDispatch()
    const params = useParams()

    useEffect(()=>{
        return ()=>{
            if(isSuccess)
            {
                dispatch(reset())
            }
        }
    },[dispatch,isSuccess])

    useEffect(()=>{
        dispatch(getTicket(params.id))
    },[dispatch,params])

    if(isLoading)
    {
        return <Spinner/>
    }

  return (
    <div>Ticket</div>
  )
}

export default Ticket