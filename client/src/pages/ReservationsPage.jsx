import { Link, useParams } from "react-router-dom";
import ReservationsForm from "./ReservationsForm";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import userContext from "../components/userContext";


const ReservationsPage = () => {

    const { user } = useContext(userContext.userContext)

    const { action } = useParams();
    const [reservas, setReservas] = useState([])
    const [cargado, setCargado] = useState(false)

    const cargarReservas = async () => {
        try {
            const response = await axios.get(`/api/reserva/user/${user._id}`)
            setReservas(response.data)
            setCargado(true)
        }
        catch (error) {
            // console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        if (!cargado) {
            cargarReservas()
        }
    })

    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
                        to={'/account/reservations/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Hacer una reserva
                    </Link>
                </div>
            )}
            {action !== 'new' && reservas?.listaReservas?.length > 0(
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {reservas?.listaReservas?.map((reserva, index) => {
                        return (<div key={reserva._id} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-2">{reserva.usuario}</h2>
                            <h3 className="text-xl font-bold mb-2">{reserva.alojamiento}</h3>
                            <h4 className="text-xl font-bold mb-2">{dayjs(reserva.fechaInicio).format('DD/MM/YYYY')} - {dayjs(reserva.fechaFin).format('DD/MM/YYYY')}</h4>
                            <h4 className="text-xl font-bold mb-2" > {reserva.cantidadHuespedes} - {reserva.precio}$ / noche</h4>
                            <p className="text-gray-600 mb-2">{reserva.descripcion}</p>
                        </div>)
                    })}
                </div>
            )}
            {
                action !== 'new' && reservas?.listaReservas?.length === 0 && <h3>No se encontraron reservas para este usuario</h3>
            }
            {action === 'new' && (
                <ReservationsForm />
            )}
            {/* {action === 'edit' && (
                <ReservationsForm />
            )} */}
        </div>
    )
}

export default ReservationsPage;