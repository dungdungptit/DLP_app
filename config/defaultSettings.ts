import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  primaryColor: '#006CB5',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  headerTheme: 'dark',
  title: 'Tấn công mạng',
  pwa: false,
  logo: './favicon.ico',
  iconfontUrl: '',
};

export default Settings;
