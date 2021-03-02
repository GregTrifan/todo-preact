import { AreaChart } from "@carbon/charts-react";
import axios from "axios";
import { useCallback, useEffect, useState } from "preact/hooks";
import "@carbon/charts/styles.css";
const Graph = ({ Coin }) => {
  const [val, setVal] = useState([]);

  const GetInfo = useCallback(async () => {
    let coin = Coin.toLowerCase();
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=13`
    );
    const { prices } = response.data;
    const res = prices.map((price) => {
      var date = price[0];
      return {
        date: date,
        price: price[1],
        group: Coin
      };
    });
    setVal(res);
  }, [Coin]);
  useEffect(() => {
    GetInfo();
  }, [GetInfo]);
  let options = {
    title: `${Coin} Pricing`,
    axes: {
      bottom: {
        title: `${Coin} Price`,
        mapsTo: "date",
        scaleType: "time"
      },
      left: {
        mapsTo: "price",
        scaleType: "linear"
      }
    },
    curve: "curveNatural",
    height: "400px"
  };
  return <AreaChart data={val} options={options} />;
};
export default Graph;
