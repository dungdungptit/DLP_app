import axios from "@/utils/axios";
import { ip } from "@/utils/ip";

export const capture_network = () => {
    return axios.get(`${ip}/dlp_main/capture_network`);
    // return {
    //     data: {
    //         "status": true
    //     }
    // }
}