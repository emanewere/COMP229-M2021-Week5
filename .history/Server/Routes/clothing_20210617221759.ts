import express from 'express';
const router = express.Router();
export default router;
//Create a clothing controller instance
import {DisplayClothingListPage, DisplayEditPage} from '../controllers/clothing'
/* GET clothing-list page - with /clothing-list */
router.get('/', DisplayClothingListPage);
router.get('/edit/:id', DisplayEditPage);

/* display edit/:id page -with /clothing-list/edit:id */

