import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { keyframes } from 'styled-components';
let starAnimate = keyframes`
    0% { 
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-3000px);
    }
`;
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'fixed',
    zIndex: -1,
  },
  bgStar01: {
    width: 1,
    height: 1,
    background: 'transparent',
    animation: `${starAnimate} 250s linear infinite`,
    boxShadow: '1920px 1030px #fff, 563px 1433px #fff, 1520px 1270px #fff, 1431px 194px #fff, 1240px 1614px #fff, 25px 1015px #fff, 643px 1184px #fff, 409px 1058px #fff, 210px 1063px #fff, 1338px 1423px #fff, 1276px 1421px #fff, 1760px 1067px #fff, 1074px 864px #fff, 1840px 553px #fff, 307px 1346px #fff, 842px 146px #fff, 506px 893px #fff, 1411px 803px #fff, 1471px 1310px #fff, 1586px 1216px #fff, 1321px 1154px #fff, 1423px 1559px #fff, 1024px 705px #fff, 612px 430px #fff, 781px 454px #fff, 1617px 1449px #fff, 415px 235px #fff, 417px 464px #fff, 1144px 1791px #fff, 562px 595px #fff, 825px 1621px #fff, 791px 105px #fff, 1220px 1634px #fff, 1769px 353px #fff, 1115px 1322px #fff, 1621px 1183px #fff, 750px 1266px #fff, 140px 1045px #fff, 1633px 1315px #fff, 921px 2000px #fff, 1479px 251px #fff, 1360px 833px #fff, 1809px 880px #fff, 1461px 532px #fff, 189px 936px #fff, 1119px 1063px #fff, 1676px 1167px #fff, 1975px 1501px #fff, 1277px 1087px #fff',
    '&::after': {
      content: '',
      position: 'absolute',
      top: 3000,
      width: 1,
      height: 1,
      background: 'transparent',
      boxShadow: '1920px 1030px #fff, 563px 1433px #fff, 1520px 1270px #fff, 1431px 194px #fff, 1240px 1614px #fff, 25px 1015px #fff, 643px 1184px #fff, 409px 1058px #fff, 210px 1063px #fff, 1338px 1423px #fff, 1276px 1421px #fff, 1760px 1067px #fff, 1074px 864px #fff, 1840px 553px #fff, 307px 1346px #fff, 842px 146px #fff, 506px 893px #fff, 1411px 803px #fff, 1471px 1310px #fff, 1586px 1216px #fff, 1321px 1154px #fff, 1423px 1559px #fff, 1024px 705px #fff, 612px 430px #fff, 781px 454px #fff, 1617px 1449px #fff, 415px 235px #fff, 417px 464px #fff, 1144px 1791px #fff, 562px 595px #fff, 825px 1621px #fff, 791px 105px #fff, 1220px 1634px #fff, 1769px 353px #fff, 1115px 1322px #fff, 1621px 1183px #fff, 750px 1266px #fff, 140px 1045px #fff, 1633px 1315px #fff, 921px 2000px #fff, 1479px 251px #fff, 1360px 833px #fff, 1809px 880px #fff, 1461px 532px #fff, 189px 936px #fff, 1119px 1063px #fff, 1676px 1167px #fff, 1975px 1501px #fff, 1277px 1087px #fff',
    }
  },
  bgStar02: {
    width: 2,
    height: 2,
    background: 'transparent',
    animation: `${starAnimate} 300s linear infinite`,
    boxShadow: '555px 1890px #fff, 26px 1693px #fff, 1814px 930px #fff, 371px 131px #fff, 584px 846px #fff, 1246px 174px #fff, 801px 1916px #fff, 1318px 288px #fff, 369px 286px #fff, 1785px 914px #fff, 907px 1008px #fff, 1755px 812px #fff, 898px 831px #fff, 963px 1445px #fff, 831px 410px #fff, 522px 1295px #fff, 305px 768px #fff, 676px 1715px #fff, 618px 699px #fff',
    '&::after': {
      content: '',
      position: 'absolute',
      top: 3000,
      width: 2,
      height: 2,
      background: 'transparent',
      boxShadow: '555px 1890px #fff, 26px 1693px #fff, 1814px 930px #fff, 371px 131px #fff, 584px 846px #fff, 1246px 174px #fff, 801px 1916px #fff, 1318px 288px #fff, 369px 286px #fff, 1785px 914px #fff, 907px 1008px #fff, 1755px 812px #fff, 898px 831px #fff, 963px 1445px #fff, 831px 410px #fff, 522px 1295px #fff, 305px 768px #fff, 676px 1715px #fff, 618px 699px #fff',
    }
  },
}));

export default useStyles;