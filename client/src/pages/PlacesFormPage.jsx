import { useParams } from "react-router-dom";
// import PlacesFormPage from "./PlacesFormPage";
import { useState } from "react";

const PlacesFormPage = () => {
    const { action } = useParams();
    
    const [titulo, setTitulo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [enlaceImagen, setEnlaceImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [servicios, setServicios] = useState({
        wifi: false,
        smartTV: false,
        mascotas: false,
        estacionamiento: false,
        parlante: false,
        entradaPrivada: false
    });

    const servicioIconos = {
        wifi: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
            </svg>
        ),
        smartTV: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
        ),
        mascotas: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904" />
            </svg>
        ),
        estacionamiento: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25" />
            </svg>
        ),
        parlante: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.005Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005Z" />
            </svg>
        ),
        entradaPrivada: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
        )
    };
    const [informacionExtra, setInformacionExtra] = useState('');
    const [cantidadHuespedes, setCantidadHuespedes] = useState('');
    const [precioPorNoche, setPrecioPorNoche] = useState('');
    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
                        to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Agregar nuevo alojamiento
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form>
                        <h2 className="text-2xl mt-4">Título</h2>
                        <p className="text-gray-500 text-sm">El título del alojamiento debe ser corto y preciso.</p>
                        <input 
                            type="text" 
                            placeholder="título" 
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)}
                        />
                        <h2 className="text-xl mt-4">Dirección</h2>
                        <p className="text-gray-500 text-sm">Dirección del alojamiento.</p>
                        <input 
                            type="text" 
                            placeholder="direccion "
                            value={direccion} 
                            onChange={e => setDireccion(e.target.value)}
                        />
                        <h2 className="text-xl mt-4">Fotos</h2>
                        <p className="text-gray-500 text-sm">Fotos del alojamiento</p>
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                placeholder="agregar usando un link ...jpg" 
                                value={enlaceImagen}
                                onChange={e => setEnlaceImagen(e.target.value)}
                            />
                            <button className="bg-gray-200 px-4 rounded-2xl">
                                Agregar foto
                            </button>
                        </div>
                        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cold-6">
                            <button className="flex justify-center border bg-transparent rounded-2xl p-8 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                </svg>
                                Subir foto
                            </button>
                        </div>
                        <h2 className="text-xl mt-4">Descripción</h2>
                        <p className="text-gray-500 text-sm">Descripción del alojamiento</p>
                        <textarea 
                            value={descripcion}
                            onChange={e => setDescripcion(e.target.value)}
                        ></textarea>
                        <h2 className="text-xl mt-4">Servicios</h2>
                        <p className="text-gray-500 text-sm">Servicios del alojamiento</p>
                        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            {Object.keys(servicios).map((servicio) => (
                                <label key={servicio} className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        checked={servicios[servicio]} 
                                        onChange={() => toggleServicio(servicio)} 
                                    />
                                    <span>{servicio.charAt(0).toUpperCase() + servicio.slice(1)}</span>
                                </label>
                            ))}
                        </div>
                        <h2 className="text-xl mt-4">Información extra</h2>
                        <p className="text-gray-500 text-sm">Reglas de la casa, etc.</p>
                        <textarea 
                            value={informacionExtra}
                            onChange={e => setInformacionExtra(e.target.value)}
                        ></textarea>
                        <p className="text-gray-500 text-sm">Fijar cantidad máxima de huéspedes y precio por el alojamiento.</p>
                        <div className="grid gap-2 sm:grid-cols-2">
                            <div>
                                <h3 className="mt-2 -mb-1">Cantidad de huéspedes</h3>
                                <input 
                                    type="text" 
                                    placeholder="cantidad de huéspedes"
                                    value={cantidadHuespedes}
                                    onChange={e => setCantidadHuespedes(e.target.value)}
                                />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-1">Precio</h3>
                                <input 
                                    type="text"
                                    placeholder="precio por noche"
                                    value={precioPorNoche}
                                    onChange={e => setPrecioPorNoche(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="primary my-4"> Agregar Alojamiento</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default PlacesFormPage