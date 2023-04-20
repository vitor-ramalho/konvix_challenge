import { Router } from "express";
import { register } from "./app/useCases/authentication/register";
import { login } from "./app/useCases/authentication/login";
import { createClient } from "./app/useCases/clients/create";
import { findClients } from "./app/useCases/clients/find";
import { findOneClient } from "./app/useCases/clients/findOne";
import { updateClient } from "./app/useCases/clients/update";
import { deleteClient } from "./app/useCases/clients/delete";
import { findUsers } from "./app/useCases/users/find";
import { findOneUser } from "./app/useCases/users/findOne";
import { createSale } from "./app/useCases/sales/create";
import { findSales } from "./app/useCases/sales/find";
import { findOneSale } from "./app/useCases/sales/findOne";
import { updateSale } from "./app/useCases/sales/update";
import { deleteSale } from "./app/useCases/sales/delete";
import { createSaleItem } from "./app/useCases/sale-item/create";
import { findSaleItems } from "./app/useCases/sale-item/find";
import { findOneSaleItem } from "./app/useCases/sale-item/findOne";
import { updateSaleItem } from "./app/useCases/sale-item/update";
import { deleteSaleItem } from "./app/useCases/sale-item/delete";

export const router = Router();

//Auth
router.post("/register", register);
router.post("/login", login);
//Users
router.get("/user", findUsers);
router.get("/user/:cod_usuario", findOneUser);
router.put("/user/:cod_usuario", updateClient);
router.delete("/user/:cod_usuario", deleteClient);
//clients
router.post("/client", createClient);
router.get("/client", findClients);
router.get("/client/:cod_cliente", findOneClient);
router.put("/client/:cod_cliente", updateClient);
router.delete("/client/:cod_cliente", deleteClient);
//sales
router.post("/sale/:cod_cliente", createSale);
router.get("/sale", findSales);
router.get("/sale/:cod_venda", findOneSale);
router.put("/sale/:cod_venda", updateSale);
router.delete("/sale/:cod_venda", deleteSale);

//Sale Items
router.post("/sale_item", createSaleItem);
router.get("/sale_item", findSaleItems);
router.get("/sale_item/:cod_item", findOneSaleItem);
router.put("/sale_item/:cod_item", updateSaleItem);
router.delete("/sale_item/:cod_item", deleteSaleItem);
