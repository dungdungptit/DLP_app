import { Divider, List, Spin, Table, Typography } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';
import Title from 'antd/lib/typography/Title';
import DlpMainStorage from './DlpMainStorage';
import DlpMainExtract from './DlpMainExtract';
import DlpMainCapture from './DlpMainCapture';


import { Collapse } from 'antd';

const { Panel } = Collapse;

const renderPreText = (text: string[]) => {
  return (
    <pre className={styles.huongdanText}>
      {text.map((item) => (
        <p>{item}</p>
      ))}
    </pre>
  );
};

const DlpMain = () => {
  const dlpmain = useModel('dlpmain');

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    // <Spin spinning={ettercap.loading}>
    <div className={styles.nmapGlobal}>
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header="Storage" key="1" className={styles.panelDlpmain}>
          <DlpMainStorage />

          <Title level={3} style={{ paddingLeft: 14 }}>Kết quả tìm kiếm</Title>
          {dlpmain.dataStorage.status == true && (
            <div className={styles.huongdan}>
              {dlpmain.dataStorage.file.length > 0 ? <List
                size="small"
                bordered
                dataSource={dlpmain.dataStorage.file}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              /> : (<p>Chưa có kết quả</p>)}
            </div>
          )}
        </Panel>
        <Panel header="Capture Network" key="2" className={styles.panelDlpmain}>
          <DlpMainCapture />
        </Panel>
        <Panel header="Extract Files" key="3" className={styles.panelDlpmain}>
          <DlpMainExtract />
          <Title level={3} style={{ paddingLeft: 14 }}>Kết quả</Title>
          {dlpmain.dataExtract.status == true && (
            <div className={styles.huongdan}>
              {dlpmain.dataExtract.data.length > 0 ? <List
                size="small"
                bordered
                dataSource={dlpmain.dataExtract.data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              /> : (<p style={{ textAlign: 'center' }}>Chưa có kết quả</p>)}
            </div>
          )}
        </Panel>
      </Collapse>
    </div>
    // </Spin>
  );
};

export default DlpMain;
