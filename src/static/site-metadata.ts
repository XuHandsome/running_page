interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://r.ohops.org',
  logo: 'https://ocs-cn-north1.heytapcs.com/titans-usercenter-avatar-bucket-cn/zr/3t/mg/zr3tmgegc63aqavys7kvnx4f5q000000.jpg?20250316192146',
  description: 'Personal site',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Wiki',
      url: 'https://deepwiki.com/XuHandsome/running_page',
    },
    {
      name: 'Source',
      url: 'https://github.com/XuHandsome/running_page',
    },
  ],
};

export default data;
