import axios from 'axios';
export default async function handle (req ,res) {
    try {
        const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=28.63528&longitude=-106.08889&current_weather=true")
        const datos = response.data.current_weather.temperature;
        console.log(datos);
        res.status(200).json(datos);
    }catch (error) {
        console.log(error);
        res.status(500).json({error : "error al extrer los datos"});
    }
};