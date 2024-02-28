import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon  } from "leaflet";


const Contant = () => {
    const icon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/927/927667.png",
        iconSize: [50, 50]
    })
  return (
    <div className="contact h-full w-full grid gap-4 grid-cols-1 lg:grid-cols-2 p-16 place-content-center  ">
      <div className="flex flex-col flex-wrap justify-center gap-6 items-center p-4  h-[70vh] rounded-3xl overflow-hidden font-bold">
            <h1 className="shadow-md shadow-pallete-400 bg-pallete-100 text-2xl min-w-32 sm:text-3xl xl:text-4xl rounded-3xl w-full sm:w-2/4  lg:w-3/4 h-24  flex-wrap text-center justify-center flex items-center">
                Message 
            </h1>
            <div className="flex flex-col gap-4 w-full ">
                <input type="text" placeholder="Your name" name="name" id="" className="bg-pallete-300 min-h-10 rounded-2xl p-5 outline-none shadow-md shadow-pallete-400" />
                <textarea name="textArea" id="" cols="30" placeholder="Your message" rows="10" className="bg-pallete-300 rounded-2xl p-5 outline-none shadow-md shadow-pallete-400" />
                <button className="bg-pallete-100 rounded-2xl p-5 shadow-md shadow-pallete-400">Send</button>
            </div>
      </div>
      <div className="shadow-md shadow-pallete-400 hidden rounded-3xl lg:flex min-w-50  max-w-full overflow-hidden">
        <MapContainer
            className="full-height-map h-full w-full rounded-3xl"
            center={[31.146915, 33.834611]}
            zoom={13}
            minZoom={3}
            maxZoom={19}
            maxBounds={[
            [-85.06, -180],
            [85.06, 180],
            ]}
            scrollWheelZoom={true}
        >
            <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            />

            <Marker position={[31.146915, 33.834611]} icon={icon}>
                <Popup>
                    I am over here
                </Popup>
            </Marker>
            
        </MapContainer>
      </div>
    </div>
  );
};



export default Contant;