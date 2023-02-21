import axios from "@/utils/axios";
import { ip } from "@/utils/ip";

export const extract_files = () => {
    return axios.get(`${ip}/dlp_main/extract_files`);
    // return {
    //     data: {
    //         "data": [
    //             "949f55e40705ff6fecd8d3e265201a95\tdlp_main/DataExport/PDF_download/Giao%20trinh%20thuc%20hanh%20SQL.pdf\n"
    //         ],
    //         "status": true
    //     }
    // }
}