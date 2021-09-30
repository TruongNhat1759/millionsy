import React, { useEffect, useRef, useState } from 'react';
import useStyles from './styles';
import DefaultButon from '../button/DefaultButton';
import { useHistory } from "react-router-dom";
import { isConnect } from 'data/db';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const classes = useStyles();
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if (headerRef && headerRef.current) {
      const height = headerRef.current.offsetHeight;
      console.log(height);
    }
  }, [headerRef])
  const history = useHistory();
  const [offset, setOffset] = useState(0);
  let curScroll = window.pageYOffset;
  console.log(curScroll);
  
  window.onscroll = () => {
    setOffset(window.pageYOffset)
  }
  useEffect(() => {
    // console.log(offset); 
  }, [offset]);
  const hanldeonClick = (e: React.MouseEvent) =>{
    
  }
  return (
    <header className={`${classes.root} ${offset > 0 ? 'active' : ''}`}>
      <div className={`${classes.container}`}>
        <Link to="/" className={`${classes.headerLeft}`}><img src="assets/common/logo.png" alt="Millionsy" /><span>Millionsy</span></Link>
        <div className={`${classes.headerRight}`}>
          <ul>
            <li>
              <Link to="/lottery" className={history.location.pathname === '/lottery' ? 'active ': '' }>
                <span>
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.18072 17.638C4.98109 17.8376 4.98112 18.1613 5.18072 18.3609L7.10843 20.2886C7.30805 20.4882 7.63171 20.4882 7.83131 20.2886L19.6386 8.48131C19.8382 8.28171 19.8382 7.95806 19.6386 7.75843L17.7109 5.83073C17.5112 5.6311 17.1876 5.63113 16.988 5.83073C16.3901 6.42862 15.4172 6.42865 14.8193 5.83073C14.2214 5.2328 14.2214 4.25996 14.8193 3.66203C15.0189 3.46243 15.0189 3.13878 14.8193 2.93915L12.8916 1.01145C12.6919 0.811822 12.3683 0.811847 12.1687 1.01145L0.361441 12.8187C0.161816 13.0183 0.16184 13.342 0.36144 13.5416L2.28915 15.4693C2.48877 15.6689 2.81243 15.6689 3.01203 15.4693C3.60993 14.8714 4.5828 14.8714 5.18072 15.4693C5.77864 16.0672 5.77864 17.0401 5.18072 17.638ZM2.68691 14.4213L1.44576 13.1801L9.03614 5.58977L10.1205 6.67411C10.3201 6.87374 10.6438 6.87371 10.8434 6.67411C11.043 6.47451 11.043 6.15083 10.8434 5.95123L9.75902 4.86689L12.5301 2.09577L13.7713 3.33691C13.1153 4.32873 13.2237 5.68088 14.0964 6.55361C14.9691 7.42634 16.3213 7.5347 17.3131 6.87873L18.5542 8.11987L15.7831 10.891L14.6988 9.80662C14.4992 9.607 14.1755 9.60702 13.9759 9.80662C13.7763 10.0062 13.7763 10.3299 13.9759 10.5295L15.0603 11.6138L7.46989 19.2042L6.22875 17.9631C6.8847 16.9713 6.77635 15.6191 5.90363 14.7464C5.0309 13.8737 3.67869 13.7653 2.68691 14.4213Z" fill="#F4E0FF"/>
                  </svg>
                </span>
                Lottery
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.85938 7.94836C2.62852 7.94836 0 10.5769 0 13.8077C0 17.0386 2.62852 19.6671 5.85938 19.6671C9.09023 19.6671 11.7188 17.0386 11.7188 13.8077C11.7188 10.5769 9.09023 7.94836 5.85938 7.94836ZM5.85938 18.1046C3.49008 18.1046 1.5625 16.177 1.5625 13.8077C1.5625 11.4384 3.49008 9.51086 5.85938 9.51086C8.22867 9.51086 10.1562 11.4384 10.1562 13.8077C10.1562 16.177 8.22867 18.1046 5.85938 18.1046ZM5.85938 11.464C4.56703 11.464 3.51562 12.5154 3.51562 13.8077C3.51562 15.1001 4.56703 16.1515 5.85938 16.1515C7.15172 16.1515 8.20312 15.1001 8.20312 13.8077C8.20312 12.5154 7.15172 11.464 5.85938 11.464ZM5.85938 14.589C5.42859 14.589 5.07812 14.2385 5.07812 13.8077C5.07812 13.377 5.42859 13.0265 5.85938 13.0265C6.29016 13.0265 6.64062 13.377 6.64062 13.8077C6.64062 14.2385 6.29016 14.589 5.85938 14.589ZM20 13.8077C20 17.0386 17.3715 19.6671 14.1406 19.6671C13.4764 19.6671 12.8244 19.5566 12.2026 19.3388C11.7954 19.1961 11.581 18.7504 11.7236 18.3432C11.8663 17.936 12.3121 17.7216 12.7193 17.8642C13.1746 18.0237 13.6528 18.1046 14.1406 18.1046C16.5099 18.1046 18.4375 16.177 18.4375 13.8077C18.4375 11.4384 16.5099 9.51086 14.1406 9.51086C13.6287 9.51086 13.1283 9.59973 12.6533 9.77504C12.2485 9.92438 11.7993 9.71735 11.6498 9.31254C11.5005 8.90778 11.7076 8.45852 12.1123 8.30914C12.7612 8.06973 13.4436 7.94836 14.1406 7.94836C17.3715 7.94836 20 10.5769 20 13.8077ZM4.16949 6.11336C4.31238 4.67411 4.98219 3.34309 6.05547 2.36551C7.13625 1.3811 8.53715 0.838989 10 0.838989C11.455 0.838989 12.8502 1.37602 13.9286 2.3511C14.999 3.31895 15.6728 4.63907 15.8258 6.06833C15.8718 6.49735 15.5612 6.88239 15.1321 6.92832C14.7034 6.97422 14.3181 6.66368 14.2721 6.23469C14.0382 4.04942 12.2016 2.40149 10 2.40149C7.78133 2.40149 5.9432 4.0636 5.72438 6.26774C5.68438 6.67083 5.34457 6.97184 4.94789 6.97184C4.92203 6.97184 4.89602 6.97055 4.86977 6.96797C4.44039 6.92536 4.12687 6.54274 4.16949 6.11336ZM12.3322 6.46493C12.3748 6.8943 12.0613 7.27692 11.632 7.31954C11.6057 7.32211 11.5796 7.3234 11.5539 7.3234C11.1571 7.3234 10.8174 7.02239 10.7773 6.6193C10.7376 6.21899 10.4034 5.91711 10 5.91711C9.6066 5.91711 9.27332 6.21055 9.22484 6.59969C9.17148 7.02786 8.78137 7.33196 8.35293 7.27829C7.92477 7.22493 7.62098 6.83454 7.67434 6.40641C7.82016 5.23668 8.82 4.35461 10 4.35461C11.2101 4.35461 12.2128 5.26184 12.3322 6.46493ZM14.693 14.3602C14.9977 14.0556 14.9977 13.5599 14.693 13.2553C14.4709 13.0332 14.139 12.9658 13.8473 13.0836C13.4472 13.2452 12.992 13.0518 12.8304 12.6518C12.6687 12.2517 12.8621 11.7964 13.2621 11.6348C14.1362 11.2817 15.1316 11.4841 15.798 12.1505C16.7118 13.0643 16.7118 14.5512 15.798 15.465C15.3493 15.9137 14.7513 16.152 14.1418 16.152C13.8461 16.152 13.5477 16.096 13.2621 15.9806C12.8621 15.819 12.6687 15.3637 12.8304 14.9636C12.992 14.5636 13.4474 14.3704 13.8473 14.5318C14.139 14.6497 14.4709 14.5823 14.693 14.3602Z" fill="#F4E0FF"/>
                  </svg>
                </span>
                Millipad
              </Link>
              </li>
            <li>
              <Link to="/">
                <span>
                  <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9216 11.4971C15.9075 11.4775 15.8915 11.4591 15.874 11.4426C15.8564 11.4258 15.8369 11.4108 15.8165 11.3981C15.796 11.3853 15.7737 11.3744 15.7512 11.3659C15.7283 11.3572 15.7048 11.3512 15.6811 11.3472C15.6573 11.3431 15.6329 11.3412 15.6087 11.3418C15.56 11.3436 15.5119 11.3547 15.4674 11.3745C15.4454 11.3845 15.4247 11.3969 15.4047 11.411C15.3851 11.4251 15.3667 11.4407 15.3503 11.4586C15.3334 11.4762 15.3185 11.4957 15.3057 11.5161C15.2926 11.5367 15.282 11.5585 15.2732 11.5815C15.2647 11.604 15.2584 11.6275 15.2544 11.6513C15.2504 11.6754 15.2488 11.6998 15.2495 11.724C15.2501 11.7482 15.2535 11.7725 15.2589 11.796C15.2643 11.8195 15.272 11.8428 15.282 11.8649C15.2921 11.8869 15.3042 11.9081 15.3183 11.9277C15.3324 11.9476 15.3484 11.966 15.3659 11.9825C15.3839 11.9993 15.403 12.0143 15.4238 12.027C15.4442 12.0397 15.4662 12.0507 15.489 12.0591C15.5116 12.0676 15.5351 12.0739 15.5589 12.0779C15.583 12.0819 15.607 12.0839 15.6312 12.0829C15.6557 12.0822 15.6798 12.0793 15.7036 12.0738C15.7271 12.0684 15.75 12.0604 15.7724 12.0503C15.7945 12.0406 15.8156 12.0281 15.8352 12.0141C15.8548 12 15.8732 11.984 15.89 11.9664C15.9065 11.9489 15.9218 11.9294 15.9346 11.9089C15.9473 11.8884 15.9583 11.8665 15.9667 11.8436C15.9752 11.8211 15.9815 11.7976 15.9855 11.7735C15.9895 11.7497 15.9911 11.7253 15.9904 11.7011C15.9898 11.6769 15.9868 11.6525 15.9814 11.629C15.9759 11.6055 15.9679 11.5823 15.9579 11.5602C15.9478 11.5382 15.9357 11.517 15.9216 11.4971Z" fill="#F4E0FF"/>
                    <path d="M11.9587 9.1346L9.9403 9.31949L8.67995 7.85454C8.57186 7.72894 8.39611 7.67422 8.22659 7.7134C8.05707 7.75258 7.92312 7.87889 7.88116 8.03917L7.45033 9.68402L7.39151 9.90861L6.67427 10.181L5.49676 10.6282C5.33427 10.6899 5.22045 10.8326 5.20307 10.9964C5.18569 11.1601 5.2679 11.3164 5.41504 11.3996L6.84296 12.2074L7.13072 12.3702L7.16673 13.1398L7.22003 14.2798C7.22766 14.4436 7.33305 14.5865 7.4919 14.6485C7.6507 14.7105 7.83542 14.6809 7.96832 14.572L9.5184 13.3023L11.4684 13.763C11.541 13.7802 11.6158 13.7796 11.6867 13.7632C11.779 13.7419 11.8647 13.6937 11.9301 13.6227C12.0456 13.4973 12.0776 13.3226 12.0126 13.1721L11.2548 11.4169L12.3706 9.79196C12.4663 9.65261 12.4716 9.47606 12.3841 9.33655C12.2967 9.19703 12.1318 9.11877 11.9587 9.1346ZM10.3622 11.1533C10.2795 11.2737 10.2636 11.4234 10.3198 11.5536L10.8214 12.7154L9.53059 12.4105C9.38601 12.3763 9.23101 12.4122 9.11605 12.5063L8.08997 13.3468L8.03083 12.0827C8.02781 12.0176 8.00866 11.9559 7.97721 11.9008C7.94016 11.836 7.88586 11.7805 7.81705 11.7416L7.15194 11.3654L6.68131 11.0992L7.11488 10.9344L7.93559 10.6227C7.94853 10.6178 7.96085 10.6119 7.97318 10.6059C8.09463 10.5476 8.18503 10.4419 8.21803 10.3161L8.54219 9.07859L9.37648 10.0484C9.46995 10.157 9.61514 10.2137 9.76479 10.2L11.1009 10.0776L10.3622 11.1533Z" fill="#F4E0FF"/>
                    <path d="M23.7892 9.23522L23.0538 7.21444C22.9747 6.99723 22.7313 6.88403 22.5069 6.95999C21.6844 7.23854 20.7794 6.81751 20.4898 6.02162C20.2001 5.22573 20.6257 4.32968 21.4385 4.02421C21.6603 3.94081 21.7748 3.69982 21.6958 3.48261L20.9604 1.46182C20.8333 1.11272 20.5742 0.834377 20.2307 0.678065C19.8872 0.521804 19.5006 0.506306 19.1419 0.634326L4.67279 5.80084C4.3177 5.92764 4.03232 6.18028 3.86767 6.51267L1.90727 6.96579C1.1409 7.14301 0.657886 7.89478 0.830524 8.64168L1.31462 10.7361C1.36666 10.9613 1.59429 11.102 1.8261 11.0525C2.6756 10.8709 3.52184 11.3942 3.7125 12.2191C3.90316 13.044 3.37242 13.8856 2.5294 14.0953C2.29935 14.1524 2.15658 14.3788 2.20861 14.6039L2.69271 16.6983C2.86535 17.4453 3.62927 17.9088 4.39565 17.7317L16.322 14.9751L19.3701 14.2705C20.1365 14.0934 20.6195 13.3416 20.4468 12.5947L20.2997 11.958L22.9219 11.0217C23.2806 10.8936 23.5684 10.6373 23.7322 10.2998C23.8959 9.96237 23.9162 9.58429 23.7892 9.23522ZM19.2837 11.4212L19.4758 12.2522L19.6002 12.7904C19.6677 13.0823 19.4789 13.3761 19.1793 13.4454L16.5546 14.052L16.393 13.353L16.3758 13.2785C16.3231 13.0506 16.0909 12.9097 15.8571 12.9637C15.6233 13.0178 15.4765 13.2463 15.5291 13.4742L15.5691 13.6472L15.7079 14.2477L10.5459 15.4408L7.41297 16.165L4.20491 16.9065C3.90541 16.9757 3.60682 16.7945 3.53934 16.5026L3.14094 14.7789C3.59603 14.5803 3.98046 14.2526 4.24768 13.8296C4.59181 13.2847 4.70242 12.6433 4.55914 12.0234C4.41585 11.4035 4.03498 10.8756 3.48667 10.5371C3.06086 10.2742 2.57169 10.1485 2.07557 10.1697L1.67717 8.44599C1.6097 8.15409 1.79846 7.86024 2.098 7.79101L3.75404 7.40824L4.60136 7.21239L13.6011 5.13223L14.7623 10.1564C14.815 10.3842 15.0472 10.5252 15.281 10.4711C15.5148 10.4171 15.6616 10.1886 15.609 9.96068L14.4477 4.93658L17.0725 4.3299C17.372 4.26068 17.6706 4.44184 17.7381 4.73378L18.1365 6.45746C17.6814 6.65613 17.2969 6.98377 17.0297 7.40686C16.6855 7.95167 16.575 8.5931 16.7183 9.21301C16.8616 9.83293 17.2424 10.3608 17.7907 10.6993C18.2165 10.9622 18.7057 11.0879 19.2018 11.0667L19.2838 11.4211L19.2837 11.4212ZM22.9489 9.94344C22.8848 10.0753 22.7724 10.1755 22.6322 10.2256L20.1076 11.127L19.9627 10.5003C19.9107 10.2752 19.6831 10.1344 19.4513 10.1839C18.6018 10.3656 17.7555 9.84218 17.5648 9.01725C17.3742 8.19232 17.9049 7.35072 18.748 7.14113C18.978 7.08391 19.1208 6.85755 19.0687 6.6324L18.5846 4.53798C18.412 3.79103 17.6481 3.32747 16.8817 3.50461L13.8336 4.20914L7.64175 5.6403L19.4316 1.43054C19.5717 1.38047 19.7229 1.38654 19.8572 1.44761C19.9914 1.50868 20.0927 1.61748 20.1423 1.75392L20.7476 3.41701C20.3192 3.66675 19.9767 4.03616 19.7623 4.48662C19.4862 5.06673 19.454 5.71559 19.6717 6.31371C19.8894 6.91182 20.3321 7.39116 20.9183 7.66335C21.3735 7.87476 21.8752 7.9427 22.3659 7.86427L22.9711 9.52735C23.0208 9.66379 23.0129 9.81156 22.9489 9.94344Z" fill="#F4E0FF"/>
                  </svg>
                </span>
                NFT Tickets
              </Link>
            </li>
          </ul>
          <DefaultButon text="Connect Wallet" connect={isConnect} onClick={hanldeonClick}></DefaultButon>
        </div>
      </div>
    </header>
  )
}

export default Header