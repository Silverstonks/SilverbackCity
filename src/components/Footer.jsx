import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../store/actions';
import { toast } from 'react-toastify';
import Logo from '../static/images/header/Logo.png';
import Bidsarena from '../static/images/slider/IconBidsarena.png';
import Ecommerce from '../static/images/slider/IconEcommerce.png';
import Exchange from '../static/images/slider/IconExchange.png';
import Foundry from '../static/images/slider/IconFoundry.png';
import Lounge from '../static/images/slider/IconLounge.png';
import Meta from '../static/images/slider/IconMeta.png';
import NftLab from '../static/images/slider/IconNftLab.png';
import Vault from '../static/images/slider/IconVault.png';

const Footer = () => {
  const dispatch = useDispatch();
  const [loadingNewsletter, setloadingNewsletter] = useState(false);
  const { emailNewsletter, errorEmailNewsletter } = useSelector((state) => state.application);

  useEffect(() => {
    if (!!emailNewsletter) {
      toast.success(`Succesfully subscribed: ${emailNewsletter}`, { position: 'bottom-right' });
    }
    setloadingNewsletter(false);
  }, [emailNewsletter]);

  useEffect(() => {
    if (errorEmailNewsletter) {
      toast.error('Subscription Error', { position: 'bottom-right' });
    }
    setloadingNewsletter(false);
  }, [errorEmailNewsletter]);

  const onClickNewsletter = () => {
    const email = document.getElementsByName('email')[0];
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
      setloadingNewsletter(true);
      dispatch(actions.applicationActions.subscribeNewsletter(email.value));
    } else {
      email.value = '';
    }
  };

  return (
    <footer>
      <div className="container-fluid d-flex row footer-container">
        <div className='d-flex flex-column my-5'>
          <img className='mt-5 mb-2' src={Logo} alt="" />
          <div className='button-container my-3'>
            <button className=''>Connect Wallet</button>
          </div>
          <div className='button-container'>
            <button className=''>Mint</button>
          </div>

        </div>
        <div className='row mt-5 pt-5'>
          <div className="pr-5">
            <ul>
              <li className='py-1'><a href=""><p> <img src={Bidsarena} alt="" width="20px" className='mr-2' /> BIDSARENA</p></a></li>
              <li className='py-1'><a href=""><p> <img src={NftLab} alt="" width="25px" className='mr-2'/>NFT LAB</p></a>
              </li>
              <li className='py-1'> <a href=""><p> <img src={Vault} alt="" width="20px" className='mr-2'/>THE VAULT</p></a></li>
              <li className='py-1'> <a href=""><p> <img src={Foundry} alt="" width="20px" className='mr-2'/>FOUNDRY</p></a>
              </li>
            </ul>
          </div>
          <div className="pl-5">
            <ul>
              <li className='py-1'><p> <img src={Lounge} alt="" width="20px" className='mr-2' /><a href="">UNDERGROUND LOUNGE</a></p></li>
              <li className='py-1'><p> <img src={Exchange} alt="" width="20px" className='mr-2' /><a href="">SSTX EXCHANGE</a></p></li>
              <li className='py-1'><p> <img src={Ecommerce} alt="" width="20px" className='mr-2' /><a href="">SILVER SHOP</a></p></li>
              <li className='py-1'><p> <img src={Meta} alt="" width="20px" className='mr-2' /><a href="">META ADVERTISING</a></p></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-xl py-4">
          <div className="row justify-content-between">
            <div className="col-md-4 txt-color-white text-center text-md-left">© 2022 Silver Stonks. All Rights Reserved.</div>
            <div className="col-md-4 text-center txt-color-white">
              <a href="https://silverstonks.io/privacy.html" className="txt-color-white ">
                Privacy Policy
              </a>
              <span className="px-3">|</span>
              <a href="https://silverstonks.io/terms.html" className="txt-color-white ">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
