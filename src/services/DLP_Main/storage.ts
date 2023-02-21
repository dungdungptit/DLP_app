import axios from "@/utils/axios";
import { ip } from "@/utils/ip";

export const storage = (payload: { folder_in: string, file_out: string }) => {
    return axios.post(`${ip}/dlp_main/storage`, payload);
    // return {
    //     data: {
    //         "file": [
    //             "16d5e814a17dc497d9d27ab0809c53df\tinputFolder\\B1_Tong quan ve tan cong mang_2LT.pptx\t (mật)\n",
    //             "bd75ed55767a3caad6e147d5a72628d9\tinputFolder\\Dự toán P1.xlsx\t (kế hoạch)\n",
    //             "d0a31dbbeaa89b60950d48e1f79fc8e8\tinputFolder\\input_doc.docx\t (kế hoạch)\n",
    //             "90bc9f01c9be264dd1ec140137903f8d\tinputFolder\\Kế hoạch hoạt động - Copy.docx\t (kế hoạch)\n",
    //             "90bc9f01c9be264dd1ec140137903f8d\tinputFolder\\Kế hoạch hoạt động.docx\t (kế hoạch)\n",
    //             "8e14a5d3b0768ca1b274da3c924a4bdb\tinputFolder\\test.docx\t (mật)\n",
    //             "22b132c24878954ad26e2da4e52aebbe\tinputFolder\\Kế hoạch quý 4 cty.pdf\t (kế hoạch)\n",
    //             "949f55e40705ff6fecd8d3e265201a95\ttest\t (mật)\n",
    //             "052cf1bed68179a2176b4b5edc4c874d\ttest_pdf\t (mật)90bc9f01c9be264dd1ec140137903f8d\t/home/minh/Desktop/NC/DLP_format/DLP_main/DLP_api/dlp_main/inputFolder/Kế hoạch hoạt động - Copy.docx\t (kế hoạch)\n",
    //             "13c5300ec308dd84548e660762812f98\t/home/minh/Desktop/NC/DLP_format/DLP_main/DLP_api/dlp_main/inputFolder/test.docx\t (tài liệu mật)\n",
    //             "22b132c24878954ad26e2da4e52aebbe\t/home/minh/Desktop/NC/DLP_format/DLP_main/DLP_api/dlp_main/inputFolder/Kế hoạch quý 4 cty.pdf\t (kế hoạch)\n",
    //             "bed1d9e318bf22625d468e7b332dac24\t/home/minh/Desktop/NC/DLP_format/DLP_main/DLP_api/dlp_main/inputFolder/B1_Tong quan ve tan cong mang_2LT.pptx\t (tài liệu lưu hành nội bộ)\n",
    //             "90bc9f01c9be264dd1ec140137903f8d\t/home/minh/Desktop/NC/DLP_format/DLP_main/DLP_api/dlp_main/inputFolder/Kế hoạch hoạt động.docx\t (kế hoạch)\n",
    //             "d0a31dbbeaa89b60950d48e1f79fc8e8\t/home/minh/Desktop/NC/DLP_format/DLP_main/DLP_api/dlp_main/inputFolder/input_doc.docx\t (kế hoạch)\n",
    //             "bd75ed55767a3caad6e147d5a72628d9\t/home/minh/Desktop/NC/DLP_format/DLP_main/DLP_api/dlp_main/inputFolder/Dự toán P1.xlsx\t (kế hoạch)\n",
    //             "90bc9f01c9be264dd1ec140137903f8d\t/home/minh/Desktop/NC/DLP_format/DLP_main/DLP_api/dlp_main/inputFolder/Kế hoạch hoạt động - Copy.docx\t (kế hoạch)\n"
    //         ],
    //         "status": true
    //     }
    // }
}