import { message } from 'antd';
import { useState } from "react";
import {
  storage
} from "@/services/DLP_Main/storage";

import {
  extract_files
} from "@/services/DLP_Main/extract";

import {
  capture_network
} from "@/services/DLP_Main/capture";

export default () => {
  const [loading, setLoading] = useState<boolean[]>(
    new Array(3).fill(false)
  );
  const [dataStorage, setStorage] = useState<any>({
    file: [],
    status: false,
  }); // eslint-disable-line

  const [dataExtract, setExtract] = useState<any>({
    data: [],
    status: false,
  });

  const [dataCapture, setCapture] = useState<any>({
    status: false,
  });
  const storageModel = async (folder_in: string, file_out: string) => {
    try {
      setLoading(loading.map((item, index) => (index === 0 ? true : item)));
      const response = await storage({ folder_in: folder_in, file_out: file_out });
      console.log(response?.data);
      setStorage({
        file: response?.data?.file,
        status: response?.data?.status,
      });
      setLoading(loading.map((item, index) => (index === 0 ? false : item)));
    } catch (error) {
      setLoading(loading.map((item, index) => (index === 0 ? false : item)));
      setStorage({
        file: [],
        status: false,
      });
    }
  }

  const extractModel = async () => {
    try {
      setLoading(loading.map((item, index) => (index === 2 ? true : item)));
      const response = await extract_files();
      console.log(response?.data);
      setExtract({
        data: response?.data?.data,
        status: response?.data?.status,
      });
      setLoading(loading.map((item, index) => (index === 2 ? false : item)));
    } catch (error) {
      setLoading(loading.map((item, index) => (index === 2 ? false : item)));
      setExtract({
        data: [],
        status: false,
      });
    }

  }

  const captureModel = async () => {
    try {
      setLoading(loading.map((item, index) => (index === 1 ? true : item)));
      const response = await capture_network();
      console.log(response?.data);
      message.success(`file thu được + ${response?.data?.file}`);
      setCapture({
        status: response?.data?.status,
      });
      setLoading(loading.map((item, index) => (index === 1 ? false : item)));
    } catch (error) {
      setLoading(loading.map((item, index) => (index === 1 ? false : item)));
      setCapture({
        status: false,
      });
    }
  }

  return {
    loading,
    setLoading,
    dataStorage,
    setStorage,
    dataExtract,
    setExtract,
    dataCapture,
    setCapture,

    extractModel,
    captureModel,
    storageModel,

  };
};
