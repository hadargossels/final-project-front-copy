import * as React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { Card } from "@material-ui/core";
import DollarIcon from "@material-ui/icons/AttachMoney";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarsIcon from "@material-ui/icons/Stars";
import PeopleIcon from "@material-ui/icons/People";
import CardWithIcon from "./CardWithIcon";
// import { Line } from "react-chartjs-2";
const Dashboard = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "# of orders",
        data: [55, 67, 75, 81, 92, 73, 100, 88, 73, 60, 101, 80],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 120, 60, 0.2)",
          "rgba(102, 220, 40, 0.2)",
          "rgba(40, 198, 80, 0.2)",
          "rgba(62, 188, 240, 0.2)",
          "rgba(157, 705, 178, 0.2)",
          "rgba(255, 60, 145, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 120, 60, 1)",
          "rgba(102,220,40, 1)",
          "rgba(40, 198, 80, 1)",
          "rgba(62, 188, 240, 1)",
          "rgba(157, 705, 178, 1)",
          "rgba(255, 60, 145, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: { text: "2021 Orders", display: true },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <CardWithIcon
          icon={DollarIcon}
          title="Monthly Revenue"
          subtitle="US$10,000"
        />
        <CardWithIcon
          icon={ShoppingCartIcon}
          title="New Orders"
          subtitle="220"
        />
      </div>
      <div className="row justify-content-center">
        <CardWithIcon icon={StarsIcon} title="Bestseller" subtitle="Pixie" />
        <CardWithIcon icon={PeopleIcon} title="Customers" subtitle="101" />
      </div>

      <div className="my-2 row justify-content-center">
        <Card className="col-7">
          <Bar data={data} options={options} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
