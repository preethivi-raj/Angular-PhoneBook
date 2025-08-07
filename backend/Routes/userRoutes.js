import express from "express"
import { getUserData , postUserData , updateUserData , deleteUserData  , getUser} from "../Controller/userController.js"


const router = express.Router()

router.get("/getData" , getUserData)
router.get("/get/:id" , getUser)
router.post("/postData" , postUserData)
router.put("/updateData/:id" , updateUserData)
router.delete("/deleteData/:id" ,deleteUserData )


export default router