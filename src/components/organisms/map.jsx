import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useLocation } from '@/contexts/FilterContext';

const map = (props) => {

    const { filteredData } = useLocation();

    return (

        <>
            <MapContainer className="h-[400px] w-5/6 m-3 p-2 z-0" center={[30.239260, -97.709444]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {[...filteredData].map((r, index) => (
                    <Marker key={`map component-${ r.id } - ${ index }`} position={[r.latitude, r.longitude]} >
                        <Popup>
                            <div className='flex flex-col'>
                                <div className='text-lg font-bold m-2'>{r.name}</div>
                                <div className='flex'>
                                    <div className='m-2'>
                                        <img className="w-48" src={r.img} alt="" />
                                    </div>
                                    <div className='flex flex-col m-2'>
                                        <div className='mb-5'>Known for: {r.dsc}</div>
                                        <div className='flex justify-end'>{r.rate} stars</div>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>


        </>
    )
}

export default map