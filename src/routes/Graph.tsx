import { AreaChart } from "@carbon/charts-react";
import axios from "axios";
import { h } from "preact";
import { SkeletonText } from "carbon-components-react";
import { useCallback, useEffect, useState } from "preact/hooks";
import "@carbon/charts/styles.css";
const Graph = ({ Coin }) => {
  const [val, setVal] = useState([]);
  const [loaded, setLoad] = useState(false);
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
    setLoad(true);
  }, [Coin]);
  useEffect(() => {
    GetInfo();
  }, [GetInfo, Coin]);
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
  const Chart = () => {
    if (loaded) {
      return <AreaChart data={val} options={options} />;
    } else {
      return <SkeletonText paragraph lineCount={20} />;
    }
  };

  return <Chart />;
};
export default Graph;
