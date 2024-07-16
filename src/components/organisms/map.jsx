import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useSWR from 'swr';
import { useUser } from '../../contexts/UserContext';

const fetcher = async (...args) => await fetch(...args).then(async response => await response.json());

const map = (props) => {

    const url = "https://menus-api.vercel.app/";
    const { data, error } = useSWR(url, { fetcher });
    const restaurantsData = data && !error ? data["bbqs"].slice(0, 20) : [];

    const { user } = useUser();

    return (

        <>
            <MapContainer className="h-[400px] w-5/6 m-3 p-2 z-0" center={[30.239260, -97.709444]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurantsData.map(r => (
                    <Marker key={r.id} position={[r.latitude, r.longitude]} >
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

            <p>Current user: {!user ? "none" : user.username} </p>
            <p>Current balance: {!user ? 0 : user.balance} </p>
        </>
    )
}

export default map