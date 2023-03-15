import axios from "@/utils/axios";
import { ip } from "@/utils/ip";

export const classifier = () => {
    return axios.get(`${ip}/dlp_main/classifier`);
    // return {
    //     data: {
    //         "status": true,
    //          "message": "Capture network successfully"
    //     }
    // }
}