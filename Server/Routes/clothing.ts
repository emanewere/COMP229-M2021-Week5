import express from 'express';
const router = express.Router();
export default router;
//Create a clothing controller instance
import {DisplayClothingListPage} from '../controllers/clothing'
/* GET clothing-list page - with /clothing-list */
router.get('/', DisplayClothingListPage);


/* display edit/:id page -with /clothing-list/edit:id */

