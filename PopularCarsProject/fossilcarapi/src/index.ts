import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const cars = [
    {model: "Citroën C3", count: 2268, adjustment: -27},
    {model: "Peugeot 208", count: 2107, adjustment: -24},
    {model: "Kia Ceed/Xceed", count: 1750, adjustment: -1},
    {model: "Ford Kuga", count: 1619, adjustment: -53},
    {model: "Toyota Yaris", count: 1515, adjustment: -45},
    {model: "VW T-Roc", count: 1435, adjustment: -7},
    {model: "Mercedes-Benz C-klasse", count: 1361, adjustment: -9},
    {model: "Hyundai i10", count: 1300, adjustment: -26},
    {model: "Nissan Qashqai", count: 1246, adjustment: -42},
    {model: "Toyota Yaris Cross", count: 1114, adjustment: 100},
    {model: "Toyota Aygo X", count: 1105, adjustment: 100},
    {model: "Peugeot 2008", count: 1067, adjustment: -29},
    {model: "Skoda Enyaq", count: 1044, adjustment: 284},
    {model: "Hyundai i20", count: 1043, adjustment: 3},
    {model: "VW Polo", count: 1031, adjustment: -30},
    {model: "Peugeot 3008", count: 1028, adjustment: -22},
    {model: "Tesla Model Y", count: 989, adjustment: 100},
    {model: "VW Taigo", count: 978, adjustment: 100},
    {model: "BMW 3-serie", count: 960, adjustment: -50},
    {model: "Opel Corsa", count: 944, adjustment: -53},
    {model: "Toyota Corolla", count: 935, adjustment: -4},
    {model: "Cupra Formentor", count: 868, adjustment: 145},
    {model: "Volvo XC40", count: 842, adjustment: 1},
    {model: "Polestar 2", count: 836, adjustment: 1990},
    {model: "VW T-Cross", count: 831, adjustment: -37}
];

app.get("api/cars", (req, res) => {
    res.json(cars);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});