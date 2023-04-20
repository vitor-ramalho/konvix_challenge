
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import CreateClient from "../Pages/CreateClient";
import ClientSaleReport from "../Pages/ClientSaleReport";
import Sale from "../Pages/Sale";
import SaleReport from "../Pages/SaleReport";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <CreateClient />
			},
			{
				path: "/clients_sale",
				element: <ClientSaleReport />
			},
			{
				path: "/sales",
				element: <Sale />
			},
			{
				path: "/sales_report",
				element: <SaleReport />
			},
		]
	},

]);